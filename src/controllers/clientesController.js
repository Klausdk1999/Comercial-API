import { atendimentosRepository } from "../repositories/atendimentosRepository.js";

export async function getAtendimentos(req, res) {

    try {
      const atendimentos = await atendimentosRepository.getAll();
      return res.status(200).send(atendimentos.rows);
    } catch (error) {
      if (error.code==="23505"){
        return res.sendStatus(409);
      }
      return res.status(500).send(error);
    }
} 

export async function createPeca(req, res){
  const {nome,valor,estoque} = req.body;
  try{
    atendimentosRepository.insertPeca([nome,valor,estoque]);
    return res.sendStatus(201);

  }catch(e){
    return res.sendStatus(500);
  }
}

export async function createProcesso(req, res){
  const {nome,valor} = req.body;
  try{
    atendimentosRepository.insertProcesso([nome,valor]);
    return res.sendStatus(201);

  }catch(e){
    return res.sendStatus(500);
  }
}

export async function createAtendimento(req, res){
  const {status,produto,cliente,responsavel,troca_de_peca,descricao} = req.body;
  try{
    atendimentosRepository.insertAtendimento([status,produto,cliente,responsavel,troca_de_peca,descricao]);
    return res.sendStatus(201);

  }catch(e){
    return res.sendStatus(500);
  }
}