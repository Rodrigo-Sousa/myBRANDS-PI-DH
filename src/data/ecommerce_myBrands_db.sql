DROP DATABASE IF EXISTS ecommerce_mybrands_db;

-- Cria banco de dados
CREATE DATABASE IF NOT EXISTS ecommerce_mybrands_db;

-- Seleciona banco de  dados para uso
USE ecommerce_mybrands_db;

-- Cria tabela de usuário
CREATE TABLE users (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR (100) NOT NULL,
    birthdate DATE,
    cpf VARCHAR (11) NOT NULL,
    picture VARCHAR (250),
    phone VARCHAR(10) NOT NULL,
    celphone VARCHAR(11) NOT NULL,
    is_admin TINYINT DEFAULT 0,
    bredIn DATETIME,
    changedIn DATETIME
);

-- Alterar tabela
-- ALTER TABLE users ADD criadoEm DATETIME;
-- ALTER TABLE users ADD alteradoEm DATETIME;

-- Insere um ou mais usuário
INSERT INTO users (name, email, senha, birthdate, cpf, picture, phone, celphone, is_admin, bredIn, changedIn)
VALUES 
	("Renata Pereira", "renata@email.com", md5("123"),"1999-11-10", "24150385041","https://i.pravatar.cc/300?img=1","1130313130","11999999999",0,NOW(),NOW()),
    ("Thiago Gomes", "cava.lo.marinho@email.com", md5("1234"),"1987-12-30", "37238095025","https://i.pravatar.cc/300?img=12","2733333333","27999969969",0,NOW(),NOW()),
    ("Leticia Correia", "correia@email.com", md5("1235"),"2000-03-01", "02424325065","https://i.pravatar.cc/300?img=10","4139319930","41939393939",0,NOW(),NOW()),
    ("Reginaldo Silva", "regis@email.com", md5("1236"),"1998-04-12", "13644998000","https://i.pravatar.cc/300?img=3","7432323120","74992292929",0,NOW(),NOW()),
    ("Joaquim Souza", "joaquim.souza@email.com", md5("1237"),"1980-08-22", "10619473002","https://i.pravatar.cc/300?img=6","3532627131","35922642829",1,NOW(),NOW());

-- Lista todos os usuários
SELECT * FROM users;