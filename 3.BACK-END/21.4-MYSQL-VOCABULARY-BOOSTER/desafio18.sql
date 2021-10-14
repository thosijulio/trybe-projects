SELECT 
    CONCAT(E.FIRST_NAME, ' ', E.LAST_NAME) AS `Nome completo`,
    DATE_FORMAT(JH.START_DATE, '%d/%m/%Y') AS `Data de início`,
    DATE_FORMAT(JH.END_DATE, '%d/%m/%Y') AS `Data de rescisão`,
    ROUND(DATEDIFF(JH.END_DATE, JH.START_DATE) / 365,
            2) AS `Anos trabalhados`
FROM
    hr.employees AS E
        INNER JOIN
    hr.job_history AS JH ON E.EMPLOYEE_ID = JH.EMPLOYEE_ID
ORDER BY `Nome completo` , `Anos trabalhados`;

-- A fórmula utlizada para criar a coluna 'Anos trabalhados' foi baseada no conteúdo do site: https://www.dirceuresende.com/blog/sql-server-como-calcular-a-diferenca-em-anos-idade-entre-duas-datas-utilizando-tsql-ou-clr/#:~:text=C%C3%A1lculo%20de%20idade%20utilizando%20Transact%2DSQL%20e%20divis%C3%A3o%20por%20365.25,esse%20valor%20por%20365%2C25.
-- A fórmula utilizada para criar as colunas 'Data de inicio' e 'Data de rescisao' foram aprendidas em: https://www.w3schools.com/mysql/func_mysql_date_format.asp;
