# Exemplos
SELECT 'Olá, bem-vindo ao SQL!';
SELECT 10;
SELECT now();
SELECT 20 * 2;
SELECT 50 / 2;
SELECT 18 AS idade;
SELECT 2019 AS ano;
SELECT 'Rafael', 'Martins', 25, 'Desenvolvedor Web';
SELECT 'Rafael' AS nome, 'Martins' AS sobrenome, 25 AS idade, 'Desenvolvedor Web' AS 'Área de atuação';

# Exercicios SELECT
SELECT 'Vinicius';
SELECT 'Vinicius', 'Carvalho', 27;
SELECT 'Vinicius' AS nome, 'Carvalho' AS sobrenome, 27 AS idade;
SELECT 13 * 8;
SELECT now();

# Exercicios SELECT P2
SELECT * FROM sakila.city;
SELECT first_name, last_name FROM sakila.customer;
SELECT * FROM sakila.rental;
SELECT title, description, release_year  FROM sakila.film;
SELECT * FROM sakila.actor;
SELECT * FROM sakila.film;
SELECT * FROM sakila.language;

# Exercicios CONCAT
SELECT CONCAT (first_name, last_name) FROM sakila.actor;
SELECT CONCAT (first_name, ' ', last_name) FROM sakila.actor;
SELECT CONCAT (first_name, ' ', last_name) AS `Nome Completo` FROM sakila.actor;
SELECT CONCAT (title, ' ', release_year) AS `Lançamento do Filme` FROM sakila.film;
SELECT CONCAT (title, ' ', rating) AS Classificação FROM sakila.film;
SELECT CONCAT (address, ' ', district) AS Endereço FROM sakila.address;

# Exercicios DISTINCT
SELECT DISTINCT nome, idade FROM escola.alunos;
SELECT COUNT(DISTINCT nome, idade) FROM escola.alunos;
SELECT DISTINCT nome FROM escola.alunos;
SELECT COUNT(DISTINCT nome) FROM escola.alunos;
SELECT DISTINCT idade FROM escola.alunos;
SELECT COUNT(DISTINCT idade) FROM escola.alunos;

# Exercicios COUNT
SELECT COUNT(password) FROM sakila.staff;
SELECT COUNT(staff_id) FROM sakila.staff;
SELECT COUNT(email) FROM sakila.staff;

# Exercicios LIMIT
SELECT COUNT(*) FROM sakila.rental;
SELECT * FROM sakila.rental;
SELECT * FROM sakila.rental LIMIT 10;

# Exercicios LIMIT OFFSET
SELECT * FROM sakila.rental LIMIT 10;
SELECT * FROM sakila.rental LIMIT 10 OFFSET 3;

# Exercicios ORDER BY
SELECT * FROM sakila.address ORDER BY district ASC, address DESC;
SELECT * FROM sakila.address ORDER BY address_id DESC;
SELECT * FROM sakila.address ORDER BY address_id;

# Exercicios 'Bolo com os ingredientes novos do SQL'
USE sakila;

SELECT * FROM film;
SELECT title, release_year, rental_rate FROM film;
SELECT COUNT(film_id) FROM film;

SELECT DISTINCT last_name FROM actor;
SELECT COUNT(DISTINCT last_name) FROM actor;
SELECT * FROM actor ORDER BY last_name, first_name DESC;

SELECT name FROM language LIMIT 5 OFFSET 1;

SELECT * FROM film;
SELECT title, release_year, length, replacement_cost FROM film ORDER BY length DESC, replacement_cost;