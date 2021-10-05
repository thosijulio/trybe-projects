USE hr;
DELIMITER $$

CREATE PROCEDURE exibir_historico_completo_por_funcionario(IN emailRequired VARCHAR(50))
BEGIN
SELECT 
    CONCAT(E.FIRST_NAME, ' ', E.LAST_NAME) AS `Nome completo`,
    D.DEPARTMENT_NAME AS `Departamento`,
    J.JOB_TITLE AS `Cargo`
FROM
    hr.job_history AS JH
        INNER JOIN
    employees AS E ON E.EMPLOYEE_ID = JH.EMPLOYEE_ID
        INNER JOIN
    departments AS D ON D.DEPARTMENT_ID = JH.DEPARTMENT_ID
        INNER JOIN
    jobs AS J ON J.JOB_ID = JH.JOB_ID
WHERE E.EMAIL = emailRequired
ORDER BY `Departamento`, `Cargo`;
END $$

DELIMITER ;
