import connection from "../database/postgre.js";

async function getAll() {
    
	return connection.query(
        `SELECT * FROM atendimentos;`
    );
}

export const atendimentosRepository = {
	getAll
}
