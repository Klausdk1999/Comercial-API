import { Router } from "express";
import {getClientes,createBairro,createCidade,createCliente,createEndereco,createEstado,createPais,createTipo} from "../controllers/clientesController.js";
//import validateSchema from "../middlewares/schemaValidation.js";
//import {Schema} from "../schemas/Schema.js";
const clientesRouter = Router();

clientesRouter.get("/clientes",getClientes);
clientesRouter.post("/pais",createPais);
clientesRouter.post("/estado",createEstado);
clientesRouter.post("/cidade",createCidade);
clientesRouter.post("/bairro",createBairro);
clientesRouter.post("/endereco",createEndereco);
clientesRouter.post("/cliente",createCliente);
clientesRouter.post("/tipo",createTipo);

export default clientesRouter;