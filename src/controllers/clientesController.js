import { clientesRepository } from "../repositories/clientesRepository.js";

export async function getClientes(req, res) {

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

export async function createPais(req, res){
  const {nome} = req.body;
  try{
    clientesRepository.insertPais([nome]);
    return res.sendStatus(201);

  }catch(e){
    return res.sendStatus(500);
  }
}

export async function createEstado(req, res){
  const {nome,pais} = req.body;
  try{
    clientesRepository.insertEstado([nome,pais]);
    return res.sendStatus(201);

  }catch(e){
    return res.sendStatus(500);
  }
}

export async function createCidade(req, res){
  const {nome,estado} = req.body;
  try{
    clientesRepository.insertCidade([nome,estado]);
    return res.sendStatus(201);

  }catch(e){
    return res.sendStatus(500);
  }
}

export async function createBairro(req, res){
  const {nome,cidade} = req.body;
  try{
    clientesRepository.insertBairro([nome,cidade]);
    return res.sendStatus(201);

  }catch(e){
    return res.sendStatus(500);
  }
}

export async function createEndereco(req, res){
  const {bairro,cep,rua,numero,complemento} = req.body;
  try{
    clientesRepository.insertEndereco([bairro,cep,rua,numero,complemento]);
    return res.sendStatus(201);

  }catch(e){
    return res.sendStatus(500);
  }
}

export async function createCliente(req, res){
  const {tipo,endereco,nome,telefone,email,cnpj_cpf} = req.body;
  try{
    clientesRepository.insertCliente([tipo,endereco,nome,telefone,email,cnpj_cpf]);
    return res.sendStatus(201);

  }catch(e){
    return res.sendStatus(500);
  }
}

export async function createTipo(req, res){
  const {nome} = req.body;
  try{
    clientesRepository.insertTipo([nome]);
    return res.sendStatus(201);

  }catch(e){
    return res.sendStatus(500);
  }
}