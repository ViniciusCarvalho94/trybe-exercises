SET SQL_SAFE_UPDATES = 0;
SELECT * FROM pixar.boxoffice;
SELECT * FROM pixar.movies;
UPDATE pixar.boxoffice SET rating = 9.0 WHERE domestic_sales > 400000000;
UPDATE pixar.boxoffice SET rating = 6.0 WHERE international_sales < 300000000 AND domestic_sales > 200000000;
SELECT * FROM pixar.movies WHERE length_minutes < 100;
DELETE FROM pixar.boxoffice WHERE movie_id IN (1, 6, 7, 8);
DELETE FROM pixar.movies WHERE length_minutes < 100;