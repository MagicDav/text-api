import express from "express";
import passageirosRoutes from "./src/routes/passageiros.routes.js";
import usersRoutes from "./src/routes/usuarios.routes.js";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

console.log("DATABASE_URL:", process.env.DATABASE_URL);
console.log("JWT_SECRET:", process.env.JWT_SECRET);

// Rotas principais
app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 Connect REST API</h1>
    <h2>Available Routes</h2>
    <pre>
      GET, POST /passageiros
      GET, PUT, DELETE /passageiros/:id
    </pre>
  `.trim());
});

// Rotas de passageiros
app.use("/api/passageiros", passageirosRoutes);
app.use("/api/auth", usersRoutes);

// Inicia o servidor
app.listen(port, () => console.log(`App rodando na porta ${port}`));
