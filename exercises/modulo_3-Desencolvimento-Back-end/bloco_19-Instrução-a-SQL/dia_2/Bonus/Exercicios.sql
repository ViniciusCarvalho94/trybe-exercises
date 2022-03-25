USE piecesproviders;
SELECT * FROM provides;
SELECT piece, price FROM provides WHERE provider = 'RBT';
SELECT piece, price FROM provides ORDER BY price DESC LIMIT 5;
SELECT DISTINCT provider, price FROM provides ORDER BY price DESC LIMIT 4 OFFSET 2;
SELECT * FROM provides WHERE provider = 'HAL' ORDER BY price DESC;
SELECT COUNT(provider) FROM provides WHERE piece = 1;