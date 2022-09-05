import connection from "../database/postgre.js";

async function getAll() {
    
	return connection.query(
        `SELECT * FROM produtos;`
    );
}

async function insertModelo(queryString) {
    
	return connection.query(
        `INSERT INTO modelos ( marca, nome,valor,boca ) VALUES ($1,$2,$3,$4) ;`,queryString
    );
}

async function insertProduto(queryString) {
    
	return connection.query(
        `INSERT INTO produtos (marca ,serial, modelo , rotulos,descricao) VALUES ($1, $2, $3, $4, $5) ;`,queryString
    );
}

async function insertMarca(queryString) {
    
	return connection.query(
        `INSERT INTO marcas ( nome ) VALUES ($1) ;`,queryString
    );
}

export const produtosRepository = {
    getAll,
	insertMarca,
    insertModelo,
    insertProduto
}
