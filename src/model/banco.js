const pg = require('pg')

const client = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'ebia',
    password: 'admin',
    port: 5432
})

module.exports = client

//AQUI EM CIMA EM PASSWORD, COLOQUE SUA SENHA DO POSTGRE
//COMANDO PARA CRIAR AS TABELAS NO BANCO
//ANTES CRIE UM BANCO DE DADOS LOCAL NO POSTGRE SQL COM O NOME "ebia"
//DEPOIS EXECUTE O COMANDO ABAIXO:
/*

create table pessoa (
	id_pessoa serial,
	nome varchar(30),
	idade integer,
	cidade varchar(30),
	estado varchar(30),
	familia varchar(20),
	pontos integer,
	situacao varchar(30),
	cpf varchar(20)
)

*/