import { PrismaClient } from "../generated/prisma/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const register = async (req, res) => {
  const { nome, email, tipo, senha } = req.body;

  try {
    const userExists = await prisma.users.findUnique({ where: { email } });
    if (userExists) return res.status(400).json({ message: "Email já existe" });

    const hashed = await bcrypt.hash(senha, 10);

    const user = await prisma.users.create({
      data: { nome, email, tipo:"admin", senha: hashed },
    });

    return res.json({ message: "Usuário criado com sucesso", user });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const user = await prisma.users.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ message: "Usuário não encontrado" });

    const match = await bcrypt.compare(senha, user.senha);
    if (!match) return res.status(401).json({ message: "Senha incorreta" });

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.json({ message: "Login realizado", token });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
