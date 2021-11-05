# Exercicios VIEW
CREATE VIEW film_with_categories AS SELECT f.title, fc.category_id, c.`name` FROM sakila.film AS f JOIN sakila.film_category AS fc ON f.film_id = fc.film_id JOIN sakila.category AS c ON fc.category_id = c.category_id ORDER BY f.title;

CREATE VIEW film_info AS SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS `actor`, f.title FROM sakila.actor AS a JOIN sakila.film_actor AS fa ON a.actor_id = fa.actor_id JOIN sakila.film AS f ON  fa.film_id = f.film_id ORDER BY `actor`;

CREATE VIEW address_info AS SELECT a.address_id, a.address, a.district, c.city_id, c.city FROM sakila.address AS a JOIN sakila.city AS c ON a.city_id = c.city_id ORDER BY c.city;

CREATE VIEW movies_languages AS SELECT f.title, f.language_id, l.`name` FROM sakila.film AS f JOIN sakila.`language` AS l ON f.language_id = l.language_id;
