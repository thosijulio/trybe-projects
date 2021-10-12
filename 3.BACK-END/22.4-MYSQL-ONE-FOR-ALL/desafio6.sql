CREATE VIEW faturamento_atual AS
    SELECT 
        ROUND(MIN(P.Valor), 2) AS faturamento_minimo,
        ROUND(MAX(P.Valor), 2) AS faturamento_maximo,
        ROUND(AVG(P.Valor), 2) AS faturamento_medio,
        ROUND(SUM(P.Valor), 2) AS faturamento_total
    FROM
        Usuario AS U
            INNER JOIN
        Plano AS P ON U.Id_Plano = P.Id;
