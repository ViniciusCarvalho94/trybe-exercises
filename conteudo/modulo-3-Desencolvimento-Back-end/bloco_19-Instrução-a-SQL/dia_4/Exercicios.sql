# Exercicios INSERT
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, `active`, username, `password`)
	VALUES ('Vinicius', 'Carvalho', 5, 'vinicius@gmail.com', 1, 1, 'Vinicius', '808080AAAaVini');
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, `active`, username, `password`) 
	VALUES 
		('Edson', 'Carvalho', 5, 'edson@gmail.com', 1, 1, 'Edson', '808080AAAaEd'),
		('Rafael', 'Romano', 6, 'rafael@gmail.com', 1, 1, 'Rafael', '808080AAAaRafa');
INSERT INTO sakila.actor (first_name, last_name) 
	SELECT first_name, last_name 
    FROM sakila.customer 
    LIMIT 5;
INSERT INTO sakila.category (`name`) VALUES
	('Santastico'),
    ('Tricolor'),
    ('Gaivotas');
INSERT INTO sakila.store (manager_staff_id, address_id) VALUES (5, 3);

# Exercicios UPDATE
UPDATE sakila.actor SET first_name = 'JULES' WHERE first_name = 'JULIA';
UPDATE sakila.category SET `name` = 'Science Fiction' WHERE `name` = 'Sci-Fi';
UPDATE sakila.film SET rental_rate = '25' 
	WHERE `length` > 100 AND rating IN ('G', 'PG', 'PG-13') AND replacement_cost > 20;
UPDATE sakila.film SET rental_rate = (
	CASE WHEN `length` > 100 THEN 20
		 WHEN `length` BETWEEN 0 AND 100 THEN 10
END);

SELECT * FROM sakila.staff;
SELECT * FROM sakila.actor;
SELECT * FROM sakila.category;
SELECT * FROM sakila.store;
SELECT * FROM sakila.film_text;

# Exercicios DELETE
SELECT * FROM sakila.actor WHERE first_name = 'KARL';
DELETE FROM sakila.film_actor WHERE actor_id = 12;
DELETE FROM sakila.actor WHERE first_name = 'KARL';
SELECT * FROM sakila.actor WHERE first_name = 'MATTHEW';
DELETE FROM sakila.film_actor WHERE actor_id IN (8, 103, 181);
DELETE FROM sakila.actor WHERE first_name = 'MATTHEW';
DELETE FROM sakila.film_text WHERE `description` LIKE '%saga%';
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;