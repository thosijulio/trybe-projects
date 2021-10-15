CREATE VIEW cancoes_premium AS
    SELECT 
        M.Nome AS nome, COUNT(*) AS reproducoes
    FROM
        Musica AS M
            INNER JOIN
        Usuario_Musica AS UM ON M.Id = UM.Id_Musica
            INNER JOIN
        Usuario AS U ON U.Id = UM.Id_Usuario
            AND U.Id_Plano BETWEEN 2 AND 3
    GROUP BY nome
    ORDER BY nome;
