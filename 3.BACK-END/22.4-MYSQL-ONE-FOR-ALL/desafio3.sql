CREATE VIEW historico_reproducao_usuarios AS
    SELECT 
        U.`Nome` AS usuario, M.`Nome` AS nome
    FROM
        Usuario AS U
            INNER JOIN
        Usuario_Musica AS UM ON U.Id = UM.Id_Usuario
            INNER JOIN
        Musica AS M ON UM.Id_Musica = M.Id
	ORDER BY usuario, nome;
