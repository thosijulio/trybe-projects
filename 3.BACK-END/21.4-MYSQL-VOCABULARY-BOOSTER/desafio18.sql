SELECT 
    CONCAT(E.FIRST_NAME, ' ', E.LAST_NAME) AS `Nome completo`,
    JH.START_DATE AS `Data de início`,
    JH.END_DATE AS `Data de rescisão`,
    ROUND(DATEDIFF(JH.END_DATE, JH.START_DATE) / 365.25,
            2) AS `Anos trabalhados`
FROM
    hr.employees AS E
        INNER JOIN
    hr.job_history AS JH ON E.EMPLOYEE_ID = JH.EMPLOYEE_ID
ORDER BY `Nome completo` , `Anos trabalhados`;
