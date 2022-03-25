# Exercicios WHERE
SELECT * FROM sakila.customer WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
SELECT * FROM sakila.customer WHERE active IS FALSE AND store_id = 2 ORDER BY first_name;
SELECT title, description, release_year, replacement_cost FROM sakila.film 
	WHERE (rating = 'G' OR rating = 'PG') AND replacement_cost >= 18.00 
    ORDER BY replacement_cost DESC, title LIMIT 100;
SELECT COUNT(store_id) FROM sakila.customer WHERE store_id = 1 AND active IS FALSE;
SELECT * FROM sakila.film WHERE rating = `NC-17` ORDER BY rental_rate, title LIMIT 50;

# Exercicios LIKE
SELECT * FROM sakila.film WHERE title LIKE '%ace%';
SELECT * FROM sakila.film WHERE `description` LIKE '%china';
SELECT * FROM sakila.film WHERE `description` LIKE '%girl%' AND title LIKE '%lord';
SELECT * FROM sakila.film WHERE title LIKE '___gon%' LIMIT 2;
SELECT * FROM sakila.film WHERE title LIKE '___gon%' AND `description` LIKE '%documentary%' LIMIT 1;
SELECT * FROM sakila.film WHERE title LIKE '%academy' OR title LIKE 'mosquito%' LIMIT 2;
SELECT * FROM sakila.film WHERE `description` LIKE '%monkey%' AND `description` LIKE '%sumo%' LIMIT 6;

# Exercicios IN e BETWEEN
SELECT first_name, last_name, email FROM sakila.customer 
	WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
    ORDER BY first_name;
SELECT email FROM sakila.customer
	WHERE address_id IN (172, 173, 174, 175, 176)
    ORDER BY first_name;
SELECT * FROM sakila.payment WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-04';
SELECT title, release_year, rental_duration FROM sakila.film
	WHERE rental_duration BETWEEN 3 AND 6
    ORDER BY rental_duration DESC, title;
SELECT title, rating FROM sakila.film WHERE rating IN ('G', 'PG', 'PG-13') ORDER BY title LIMIT 500;

# Exercicios DATE, YEAR, MONTH, DAY, HOUR, MINUTE, SECOND
SELECT COUNT(payment_id) FROM sakila.payment WHERE payment_date LIKE '2005-05-25%';
SELECT COUNT(payment_id) FROM sakila.payment WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';
SELECT DATE(rental_date) AS date, YEAR(rental_date) AS year, MONTH(rental_date) AS month, DAY(rental_date) AS day,
    HOUR(rental_date) AS hour, MINUTE(rental_date) AS minute, SECOND(rental_date) AS second FROM sakila.rental
		WHERE rental_id = 10330;
SELECT * FROM sakila.payment WHERE payment_date BETWEEN '2005-07-28 22:00:00' AND '2005-07-28 23:59:59'