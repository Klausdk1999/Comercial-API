import connection from "../dbStrategy/postgres.js";

async function getAll() {
    
	return connection.query(
        `SELECT * FROM atendimentos;`
    );
}

export const atendimentosRepository = {
	getAll
}
