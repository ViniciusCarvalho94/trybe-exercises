# Exemplos INNER JOIN
SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor AS a
INNER JOIN film_actor AS f
ON a.actor_id = f.actor_id;

SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor a
INNER JOIN film_actor f
ON a.actor_id = f.actor_id;

# Exercicios INNER JOIN
SELECT actor.actor_id, CONCAT(actor.first_name, ' ', actor.last_name) AS actor_name, film.film_id FROM sakila.actor AS actor INNER JOIN sakila.film_actor AS film ON actor.actor_id = film.actor_id;
SELECT staff.first_name, staff.last_name, address.address FROM sakila.staff AS staff INNER JOIN sakila.address AS address ON staff.address_id = address.address_id;
SELECT customer.customer_id, customer.first_name, customer.email, address.address_id, address.address FROM sakila.customer AS customer INNER JOIN sakila.address AS address ON customer.address_id = address.address_id ORDER BY `name` LIMIT 100;
SELECT customer.first_name, customer.email, address.address_id, address.address, address.district FROM sakila.customer AS customer INNER JOIN sakila.address AS address ON customer.address_id = address.address_id WHERE address.district = 'California' AND customer.first_name LIKE '%rene%';
SELECT customer.first_name, COUNT(address.address) AS 'quantidade de endereço' FROM sakila.customer customer INNER JOIN sakila.address AS address ON address.address_id = customer.address_id WHERE customer.active = 1 GROUP BY customer.first_name ORDER BY customer.first_name DESC;
SELECT s.first_name, s.last_name, AVG(p.amount) AS 'média de pagamento' FROM sakila.staff AS s INNER JOIN sakila.payment AS p ON s.staff_id = p.staff_id WHERE YEAR(p.payment_date) = 2006 GROUP BY first_name, last_name;
SELECT a.actor_id, a.first_name, f.film_id, f.title FROM sakila.actor AS a INNER JOIN sakila.film_actor AS fa ON a.actor_id = fa.actor_id INNER JOIN sakila.film AS f ON f.film_id = fa.film_id;

# Exemplo LEFT JOIN
SELECT c.customer_id, c.first_name, c.last_name, a.actor_id, a.first_name, a.last_name FROM customer AS c LEFT JOIN actor AS a ON c.last_name = a.last_name ORDER BY c.last_name;

# Exemplo RIGTH JOIN
SELECT c.customer_id, c.first_name, c.last_name, a.actor_id, a.first_name, a.last_name FROM customer AS c RIGHT JOIN actor AS a ON c.last_name = a.last_name ORDER BY c.last_name;

# Exemplo INNER JOIN
SELECT c.customer_id, c.first_name, c.last_name, a.actor_id, a.first_name, a.last_name FROM customer AS c INNER JOIN actor AS a ON c.last_name = a.last_name ORDER BY c.last_name;

# Exemplo SELF JOIN
SELECT t1.title, t1.replacement_cost, t2.title, t2.replacement_cost FROM sakila.film AS t1, sakila.film AS t2 WHERE t1.length = t2.length;

# Exercicios JOIN
SELECT f1.film_id, f1.replacement_cost, f2.film_id, f2.replacement_cost FROM sakila.film AS f1, sakila.film AS f2 WHERE f1.replacement_cost = f2.replacement_cost;
SELECT f1.title, f1.rental_duration, f2.title, f2.rental_duration FROM sakila.film AS f1, sakila.film AS f2 WHERE f1.rental_duration = f2.rental_duration HAVING f1.rental_duration BETWEEN 2 AND 4;

# Exercios UNION ALL
SELECT * FROM sakila.actor;
SELECT * FROM sakila.customer;
SELECT first_name, last_name FROM sakila.actor UNION ALL SELECT first_name, last_name FROM sakila.staff;
(SELECT first_name FROM sakila.customer WHERE first_name LIKE '%tracy%') UNION (SELECT first_name FROM sakila.actor WHERE first_name LIKE '%je%');
(SELECT first_name FROM sakila.actor ORDER BY actor_id DESC LIMIT 5) UNION (SELECT first_name FROM sakila.staff LIMIT 1) UNION (SELECT first_name FROM sakila.customer LIMIT 5 OFFSET 15) ORDER BY first_name;
(SELECT first_name, last_name FROM sakila.customer ORDER BY first_name, last_name) UNION ALL (SELECT first_name, last_name FROM sakila.actor ORDER BY first_name, last_name) ORDER BY first_name, last_name LIMIT 15 OFFSET 45;

# Exercicios EXISTS
SELECT * FROM hotel.books;
SELECT * FROM hotel.books_lent;
SELECT * FROM hotel.cars;
SELECT * FROM hotel.carsales;
SELECT * FROM hotel.customers;
SELECT * FROM hotel.reservations;
SELECT id, title FROM hotel.books AS b WHERE NOT EXISTS(SELECT * FROM hotel.books_lent WHERE b.id = book_id);
SELECT id, title FROM hotel.books AS b WHERE EXISTS(SELECT * FROM hotel.books_lent WHERE b.id = book_id AND b.title LIKE '%lost%');
SELECT `name`FROM hotel.customers AS c WHERE NOT EXISTS(SELECT * FROM hotel.carsales WHERE c.CustomerId = CustomerID);
SELECT cus.`name`, car.`name` FROM hotel.Cars AS car INNER JOIN hotel.Customers AS cus WHERE EXISTS(SELECT * FROM hotel.CarSales WHERE CustomerID = cus.CustomerId AND carID = car.ID);