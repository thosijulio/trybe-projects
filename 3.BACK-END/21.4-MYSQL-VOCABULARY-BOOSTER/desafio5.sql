SELECT
	JOB_TITLE AS `CARGO`,
    (MAX_SALARY - MIN_SALARY) AS `Variação Salarial`,
    ROUND((MIN_SALARY / 12), 2) AS `Média mínima mensal`,
    ROUND((MAX_SALARY / 12), 2) AS `Media máxima mensal`
FROM hr.jobs
ORDER BY `Variação salarial`, `Cargo`;
