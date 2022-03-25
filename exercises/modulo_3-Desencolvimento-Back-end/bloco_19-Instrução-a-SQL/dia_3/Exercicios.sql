USE pecasfornecedores;
SELECT * FROM pecas WHERE `name` LIKE 'GR%';
SELECT * FROM fornecimentos WHERE peca = 2 ORDER BY fornecedor;
SELECT peca, preco, fornecedor FROM fornecimentos WHERE fornecedor LIKE '%N%';
SELECT * FROM fornecedores WHERE `name` LIKE '%LTDA' ORDER BY `name` DESC;
SELECT COUNT(`code`) FROM fornecedores WHERE `code` LIKE '%F%';
SELECT * FROM fornecimentos WHERE preco BETWEEN 15 AND 40 ORDER BY preco;
SELECT * FROM vendas WHERE order_date BETWEEN '2018-04-15' AND '2019-07-30';