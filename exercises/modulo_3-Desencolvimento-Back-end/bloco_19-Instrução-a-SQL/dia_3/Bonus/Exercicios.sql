USE scientists;
SELECT * FROM scientists WHERE `name` LIKE '%E%';
SELECT `name` FROM projects WHERE `name` LIKE 'A%' ORDER BY `name`;
SELECT `code`, `name` FROM projects WHERE `code` LIKE '%3%' ORDER BY `name`;
SELECT scientist FROM assignedto WHERE project IN ('AeH3', 'Ast3', 'Che1');
SELECT * FROM projects WHERE hours > 500;
SELECT * FROM projects WHERE hours BETWEEN 250 AND 800;
SELECT `name` FROM projects WHERE `name` NOT LIKE 'A%';
SELECT `name` FROM projects WHERE `name` LIKE '%H%';