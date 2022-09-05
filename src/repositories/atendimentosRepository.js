import connection from "../database/postgre.js";

async function getAtendimentos() {
    
	return connection.query(
        `SELECT * FROM atendimentos;`
    );
}

async function insertPeca(queryString) {
    
	return connection.query(
        `INSERT INTO pecas ( nome,valor,estoque ) VALUES ($1,$2,$3) ;`,queryString
    );
}

async function insertProcesso(queryString) {
    
	return connection.query(
        `INSERT INTO processos ( nome,valor ) VALUES ($1, $2) ;`,queryString
    );
}

async function insertAtendimento(queryString) {
    
	return connection.query(
        `INSERT INTO atendimentos ( status,produto,cliente,responsavel,troca_de_peca,descricao ) VALUES ($1,$2,$3,$4,$5,$6) ;`,queryString
    );
}

async function insertStatus(queryString) {
    
	return connection.query(
        `INSERT INTO status ( nome ) VALUES ($1) ;`,queryString
    );
}

export const atendimentosRepository = {
	getAll,
    insertPeca,
    insertAtendimento,
    insertProcesso,
    insertStatus
}