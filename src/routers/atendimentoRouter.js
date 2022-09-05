import { Router } from "express";
import {getAtendimentos ,createPeca,createAtendimento,createProcesso} from "../controllers/atendimentosController.js";
//import validateSchema from "../middlewares/schemaValidation.js";
//import {Schema} from "../schemas/Schema.js";
const atendimentoRouter = Router();

atendimentoRouter.get("/atendimentos",getAtendimentos);
atendimentoRouter.post("/atendimento",createAtendimento);
atendimentoRouter.post("/processo",createProcesso);
atendimentoRouter.post("/peca",createPeca);

export default atendimentoRouter;