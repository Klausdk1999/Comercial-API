import { Router } from "express";
import {getProdutos,createMarca,createModelo,createProduto} from "../controllers/produtosController.js";
//import validateSchema from "../middlewares/schemaValidation.js";
//import {Schema} from "../schemas/Schema.js";
const produtoRouter = Router();

produtoRouter.get("/produtos",getProdutos);
produtoRouter.post("/marca",createMarca);
produtoRouter.post("/modelo",createModelo);
produtoRouter.post("/produto",createProduto);
//atendimentoRouter.post("/atendimento", validateSchema(cakeSchema), postCake);

export default produtoRouter;