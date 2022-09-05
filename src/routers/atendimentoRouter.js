import { Router } from "express";
import {getAtendimentos} from "../controllers/atendimentosController.js";
//import validateSchema from "../middlewares/schemaValidation.js";
//import {Schema} from "../schemas/Schema.js";
const atendimentoRouter = Router();

atendimentoRouter.get("/atendimentos",getAtendimentos);
atendimentoRouter.post("/atendimento",getAtendimentos);
atendimentoRouter.post("/processo",getAtendimentos);
atendimentoRouter.post("/peca",getAtendimentos);

export default atendimentoRouter;