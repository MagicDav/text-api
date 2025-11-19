import "dotenv/config";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import passageirosRoutes from "./src/routes/passageiros.routes.js";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));
//console.log("log:_",process.env.DATABASE_URL);

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

// Inicia o servidor
app.listen(port, () => console.log(`App rodando na porta ${port}`));
