import connection from "../database/postgre.js";

async function getAll() {
    
	return connection.query(
        `SELECT * FROM clientes;`
    );
}

async function insertPais(queryString) {
    
	return connection.query(
        `INSERT INTO paises ( nome ) VALUES ($1) ;`,queryString
    );
}

async function insertEstado(queryString) {
    
	return connection.query(
        `INSERT INTO estados ( nome,pais ) VALUES ($1, $2) ;`,queryString
    );
}

async function insertCidade(queryString) {
    
	return connection.query(
        `INSERT INTO cidades ( nome,estado ) VALUES ($1, $2) ;`,queryString
    );
}

async function insertBairro(queryString) {
    
	return connection.query(
        `INSERT INTO bairros ( nome,cidade) VALUES ($1, $2) ;`,queryString
    );
}

async function insertEndereco(queryString) {
    
	return connection.query(
        `INSERT INTO enderecos ( bairro,cep,rua,numero,complemento) VALUES ($1, $2, $3, $4, $5) ;`,queryString
    );
}

async function insertCliente(queryString) {
    
	return connection.query(
        `INSERT INTO clientes ( tipo,endereco,nome,telefone,email,cnpj_cpf ) VALUES ($1,$2,$3,$4,$5,$6) ;`,queryString
    );
}

async function insertTipo(queryString) {
    
	return connection.query(
        `INSERT INTO tipos_clientes ( nome ) VALUES ($1) ;`,queryString
    );
    //contrato ou avulso
}

export const clientesRepository = {
	getAll,
    insertPais,
    insertEstado,
    insertCidade,
    insertBairro,
    insertCliente,
    insertEndereco,
    insertTipo
}