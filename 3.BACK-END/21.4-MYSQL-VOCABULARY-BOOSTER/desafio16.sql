USE hr;

DELIMITER $$

CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(searchEmail VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
DECLARE qtdeEmpregos INT;
SELECT 
    COUNT(*)
FROM
    hr.job_history AS JH
        INNER JOIN
    hr.employees AS E ON JH.EMPLOYEE_ID = E.EMPLOYEE_ID
WHERE
    E.EMAIL = searchEmail
GROUP BY JH.EMPLOYEE_ID
INTO qtdeEmpregos;
RETURN qtdeEmpregos;
END $$

DELIMITER ;
