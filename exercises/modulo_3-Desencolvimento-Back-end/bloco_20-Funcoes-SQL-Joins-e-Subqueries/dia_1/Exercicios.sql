SELECT MAX(SALARY) FROM hr.employees;
SELECT MAX(SALARY) - MIN(SALARY) FROM hr.employees;
SELECT JOB_ID, AVG(SALARY) AS MEDIA_SALARIAL FROM hr.employees ORDER BY MEDIA_SALARIAL DESC;
SELECT SUM(SALARY) FROM hr.employees;
SELECT ROUND(MAX(SALARY),2) AS MAIOR_SALARIO, ROUND(MIN(SALARY), 2) AS MENOR_SALARIO, ROUND(SUM(SALARY), 2) AS SOMA_DOS_SALARIOS, ROUND(AVG(SALARY), 2) AS MEDIA_SALARIAL FROM hr.employees;
SELECT COUNT(JOB_ID) FROM hr.employees WHERE JOB_ID = 'IT_PROG';
SELECT JOB_ID, SUM(SALARY) FROM hr.employees GROUP BY JOB_ID;
SELECT SUM(SALARY) FROM hr.employees WHERE JOB_ID = 'IT_PROG';
SELECT JOB_ID, ROUND(AVG(SALARY), 2) AS MEDIA_SALARIAL FROM hr.employees GROUP BY JOB_ID HAVING JOB_ID <> 'IT_PROG' ORDER BY MEDIA_SALARIAL DESC;
SELECT ROUND(AVG(SALARY), 2) AS MEDIA_SALARIAL, COUNT(*) AS NUMERO_DE_TRABALHADORES FROM hr.employees GROUP BY DEPARTMENT_ID HAVING MEDIA_SALARIAL > 10;
UPDATE hr.employees SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, 515, 777) WHERE PHONE_NUMBER LIKE '515.%';
SELECT * FROM hr.employees WHERE FIRST_NAME LIKE '________%';
SELECT EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE) FROM hr.employees;
SELECT EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE) FROM hr.employees;
SELECT EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE) FROM hr.employees;
SELECT UCASE(CONCAT(FIRST_NAME, ' ', LAST_NAME)) FROM hr.employees;
SELECT LAST_NAME, HIRE_DATE FROM hr.employees WHERE MONTH(HIRE_DATE) = 07 AND YEAR(HIRE_DATE) = 1987;
SELECT FIRST_NAME, LAST_NAME, DATEDIFF(CURRENT_DATE, HIRE_DATE) FROM hr.employees;