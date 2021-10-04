SELECT 
    UCASE(CONCAT(E.FIRST_NAME, ' ', E.LAST_NAME)) AS `Nome completo`,
    E.HIRE_DATE AS `Data de início`,
    E.SALARY AS Salário
FROM
    hr.employees AS E
    WHERE MONTH(E.HIRE_DATE) BETWEEN 1 AND 3
ORDER BY `Nome completo` , `Data de início`;
