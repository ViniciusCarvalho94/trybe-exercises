CREATE SCHEMA IF NOT EXISTS normalization;

USE normalization;

CREATE TABLE funcionario (
    ID INT NOT NULL AUTO_INCREMENT,
    NOME VARCHAR(100) NOT NULL,
    SOBRENOME VARCHAR(200) NOT NULL,
    EMAIL VARCHAR(200) NOT NULL,
    TELEFONE VARCHAR(15) NOT NULL,
    DATA_CADASTRO DATETIME NOT NULL,
    PRIMARY KEY (ID)
) ENGINE=INNODB;

CREATE TABLE setor (
    ID INT NOT NULL AUTO_INCREMENT,
    NOME VARCHAR(200) NOT NULL,
    PRIMARY KEY (ID)
) ENGINE=INNODB;

CREATE TABLE funcionario_setor (
    FUNCIONARIO_ID INT NOT NULL,
    SETOR_ID INT NOT NULL,
    CONSTRAINT PRIMARY KEY (FUNCIONARIO_ID, SETOR_ID),
    FOREIGN KEY (FUNCIONARIO_ID) REFERENCES funcionario(ID),
    FOREIGN KEY (SETOR_ID) REFERENCES setor(ID)
) ENGINE=INNODB;

INSERT INTO funcionario (`NOME`, `SOBRENOME`, `EMAIL`, `TELEFONE`, `DATA_CADASTRO`) VALUES
('Joseph', 'Rodrigues', 'jo@gmail.com', '(35) 98552-1445', '2020-05-05 08:50:25'),
('André', 'Freeman', 'andre1990@gmail.com', '(47) 99522-4996', '2020-05-05 00:00:00'),
('Cíntia', 'Duval', 'cindy@outlook.com', '(33) 99855-4669', '2020-05-05 10:55:35'),
('Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33) 99200-1556', '2020-05-05 11:45:40');

INSERT INTO setor (`NOME`) VALUES
('Administração'),
('Vendas'),
('Operacional'),
('Estratégico'),
('Marketing');

INSERT INTO funcionario_setor (`FUNCIONARIO_ID`, `SETOR_ID`) VALUES
(1, 1),
(1, 2),
(2, 3),
(3, 4),
(3, 2),
(4, 5);