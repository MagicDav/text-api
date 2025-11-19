import express from "express";
import { register, login } from "../controllers/usuarios.js";

const router = express.Router();

router.post("/registrar", register);
router.post("/login", login);

export default router;
