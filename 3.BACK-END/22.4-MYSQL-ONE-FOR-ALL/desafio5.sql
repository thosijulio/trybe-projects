CREATE VIEW top_2_hits_do_momento AS
    SELECT 
        M.Nome AS cancao, COUNT(*) AS reproducoes
    FROM
        Musica AS M
            INNER JOIN
        Usuario_Musica AS UM ON M.Id = UM.Id_Musica
    GROUP BY cancao
    ORDER BY reproducoes DESC , cancao
    LIMIT 2;
