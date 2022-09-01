
create table marcas (
	id serial PRIMARY KEY,
	nome varchar(255) NOT NULL UNIQUE
);

create table modelos (
	id serial PRIMARY KEY,
	marca integer NOT NULL REFERENCES marcas(id),
	nome varchar(255) NOT NULL UNIQUE,
	valor DECIMAL(12,2),
	boca INTEGER
);

-- atualizar !!!!!!!!!!!!!!!!
create table produtos (
	id serial PRIMARY KEY,
	serial varchar(255) NOT NULL UNIQUE,
	marca varchar(255) NOT NULL REFERENCES marcas(nome),
	modelo varchar(255) NOT NULL REFERENCES modelos(nome),
	dono integer NOT NULL REFERENCES clientes(id),
	data_registro TIMESTAMP DEFAULT NOW() NOT NULL,
	rotulos INTEGER,
	descricao TEXT
);

create table status (
	id serial PRIMARY KEY,
	nome varchar(255) NOT NULL UNIQUE
);

create table processos (
	id serial PRIMARY KEY,
	nome varchar(255) NOT NULL UNIQUE,
	valor DECIMAL(12,2) 
);

create table pecas (
	id serial PRIMARY KEY,
	nome varchar(255) NOT NULL UNIQUE,
	valor DECIMAL(12,2), 
	estoque integer
);

create table tipos_clientes(
	id serial PRIMARY KEY,
	nome varchar(255) NOT NULL UNIQUE
);

create table paises(
	id serial PRIMARY KEY,
	nome varchar(255) NOT NULL UNIQUE
);

create table estados(
	id serial PRIMARY KEY,
	nome varchar(255) NOT NULL UNIQUE,
	pais VARCHAR(255) NOT NULL REFERENCES paises(nome)
);

create table cidades(
	id serial PRIMARY KEY,
	nome varchar(255) NOT NULL UNIQUE,
	estado  VARCHAR(255) NOT NULL REFERENCES estados(nome)
);

create table bairros(
	id serial PRIMARY KEY,
	nome varchar(255) NOT NULL UNIQUE,
	cidade  VARCHAR(255) NOT NULL REFERENCES cidades(nome)
);

create table enderecos(
	id serial PRIMARY KEY,
	bairro VARCHAR(255) NOT NULL REFERENCES bairros(nome),
	cep VARCHAR(255) NOT NULL,
	rua VARCHAR(255) NOT NULL,
	numero integer NOT NULL,
	complemento VARCHAR(255)
);

create table clientes(
	id serial PRIMARY KEY,
	cnpj_cpf varchar(255) UNIQUE,
	nome VARCHAR(255) NOT NULL,
	email varchar(255) NOT NULL,
	telefone varchar(255) NOT NULL,
	tipo INTEGER NOT NULL REFERENCES tipos_clientes(id),
	endereco INTEGER NOT NULL REFERENCES enderecos(id)
);

create table atendimentos (
	id serial PRIMARY KEY,
	produto integer NOT NULL REFERENCES produtos(id),
	cliente integer NOT NULL REFERENCES clientes(id),
	status VARCHAR(255) NOT NULL REFERENCES status(nome),
	data TIMESTAMP DEFAULT NOW() NOT NULL,
	responsavel VARCHAR(255),
	troca_de_peca bool NOT NULL DEFAULT false,
	descricao text
);

create table atendimentos_processos (
	atendimento integer NOT NULL REFERENCES atendimentos(id),
	processo integer NOT NULL REFERENCES processos(id)
);

create table atendimentos_pecas (
	atendimento integer NOT NULL REFERENCES atendimentos(id),
	processo integer NOT NULL REFERENCES processos(id)
);