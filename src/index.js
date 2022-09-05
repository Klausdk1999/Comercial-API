import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import produtoRouter from './routers/produtosRouter.js';
import atendimentoRouter from './routers/atendimentoRouter.js'

dotenv.config();

const PORT = process.env.PORT;

const server = express();
server.use(cors());
server.use(express.json());

// Routers session
server.use(produtoRouter);
server.use(atendimentoRouter);


server.listen(PORT, () => {
    console.log(`It's alive on port ${PORT}`);
})