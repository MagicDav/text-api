import express from "express";
import { cadastrarPassageiro, validarQRCode } from "../controllers/passageiros.js";

const router = express.Router();

router.post("/cadastrar", cadastrarPassageiro);
router.post("/validar", validarQRCode);

 
export default router;
