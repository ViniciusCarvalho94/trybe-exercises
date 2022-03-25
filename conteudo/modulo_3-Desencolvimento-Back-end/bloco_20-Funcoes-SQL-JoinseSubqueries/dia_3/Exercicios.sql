# Exemplo STORED PROCEDURE sem parametro
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAllActors()
BEGIN
    SELECT * FROM sakila.actor;
END $$

DELIMITER ;

-- Como usar:

CALL ShowAllActors();

# Exemplo STORE PROCEDURE com parametro IN
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowActorsWithSyllable(IN syllable VARCHAR(100))
BEGIN
    SELECT * FROM sakila.actor WHERE first_name LIKE CONCAT('%', syllable, '%');
END $$

DELIMITER ;

-- Como usar:

CALL ShowActorsWithSyllable('lope');

#Exemplo STORE PROCEDURE com 2 parametro IN e OUT
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAverageRentalDurationOfMovie( IN film_name VARCHAR(300), OUT media_aluguel_em_dias DOUBLE )
BEGIN
    SELECT AVG(rental_duration) INTO media_aluguel_em_dias FROM sakila.film WHERE title = film_name;
END $$

DELIMITER ;

-- Como usar:

CALL ShowAverageRentalDurationOfMovie('ACADEMY DINOSAUR', @media_de_dias);
SELECT @media_de_dias;

# Exemplo STORE PROCEDURE com parametro INOUT
USE sakila;
DELIMITER $$

CREATE PROCEDURE NameGenerator(INOUT film_name VARCHAR(300))
BEGIN
    SELECT CONCAT('ULTRA ', film_name, ' THE BEST MOVIE OF THE CENTURY') INTO film_name;
END $$

DELIMITER ;

-- Como usar:

SELECT 'ACE GOLDFINGER' INTO @movie_title;
CALL NameGenerator(@movie_title);
SELECT @movie_title;

# Exercicios STORE PROCEDURE
USE sakila;
DELIMITER $$

CREATE PROCEDURE RETURN_10_ACTORS_AND_FILMS()
BEGIN
	SELECT actor_id, COUNT(*) AS 'quantidades de filmes' FROM sakila.film_actor GROUP BY actor_id ORDER BY COUNT(*) DESC LIMIT 10;
END $$

DELIMITER ;

CALL Return10Actors();
 
USE sakila;
DELIMITER $$

CREATE PROCEDURE FIND_MOVIE_BY_CATEGORY(IN category VARCHAR(100))
BEGIN
	SELECT f.film_ID, f.title, fc.category_id, c.`name` FROM sakila.film AS f INNER JOIN sakila.film_category AS fc ON f.film_id = fc.film_id INNER JOIN sakila.category AS c ON c.category_id = fc.category_id WHERE c.`name` = category;
END $$
DELIMITER ;

CALL FIND_MOVIE_BY_CATEGORY('Action');

USE sakila;
DELIMITER $$

CREATE PROCEDURE CHECK_IF_ACTIVE_CLIENT(IN client_email VARCHAR(200), OUT isActive BOOL)
BEGIN
	SET isActive = (SELECT `active` FROM sakila.customer WHERE email = client_email);
END $$
DELIMITER ;

SELECT @ActiveStatus;
CALL CHECK_IF_ACTIVE_CLIENT('MARY.SMITH@sakilacustomer.org', @ActiveStatus);
SELECT @ActiveStatus
