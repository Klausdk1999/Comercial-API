import {produtosRepository} from '../repositories/produtosRepository.js'

export async function createMarca(req, res){
    const {nome} = req.body;
    try{
        produtosRepository.insertMarca([nome]);
        return res.sendStatus(201);

    }catch(e){
        return res.sendStatus(500);
    }
}

export async function createModelo(req, res){
    const {marca,nome,valor,boca} = req.body;
    try{
      produtosRepository.insertModelo([marca,nome,valor,boca]);
      return res.sendStatus(201);
  
    }catch(e){
      return res.sendStatus(500);
    }
}

export async function createProduto(req, res){
    const {serial,marca,modelo,rotulos,descricao} = req.body;
    try{
      produtosRepository.insertProduto([marca,serial,modelo,rotulos,descricao]);
      return res.sendStatus(201);
  
    }catch(e){
      return res.sendStatus(500);
    }
}

  
