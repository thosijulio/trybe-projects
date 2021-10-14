USE hr;

DELIMITER $$

CREATE FUNCTION exibir_quantidade_pessoas_contratadas_por_mes_e_ano(monthRequired INT, yearRequired INT)
RETURNS INT READS SQL DATA
BEGIN
DECLARE qtdeRegistros INT;
SELECT 
    COUNT(*)
FROM
    hr.employees AS E
WHERE
    YEAR(E.HIRE_DATE) = yearRequired
        AND MONTH(E.HIRE_DATE) = monthRequired INTO qtdeRegistros;
RETURN qtdeRegistros;
END $$

DELIMITER ;
