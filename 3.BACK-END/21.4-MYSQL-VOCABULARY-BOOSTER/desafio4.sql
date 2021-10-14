SELECT 
    J.JOB_TITLE AS `Cargo`,
    ROUND(AVG(E.SALARY), 2) AS `Média salarial`,
    CASE
        WHEN
            ROUND(AVG(E.SALARY), 2) >= 2000
                AND ROUND(AVG(E.SALARY), 2) <= 5800
        THEN
            'Júnior'
        WHEN
            ROUND(AVG(E.SALARY), 2) > 5800
                AND ROUND(AVG(E.SALARY), 2) <= 7500
        THEN
            'Pleno'
        WHEN
            ROUND(AVG(E.SALARY), 2) > 7500
                AND ROUND(AVG(E.SALARY), 2) <= 10500
        THEN
            'Sênior'
        WHEN ROUND(AVG(E.SALARY), 2) > 10500 THEN 'CEO'
    END AS 'Senioridade'
FROM
    hr.employees AS E
        INNER JOIN
    hr.jobs AS J ON E.JOB_ID = J.JOB_ID
GROUP BY E.JOB_ID
ORDER BY `Média salarial` , `Cargo`;
