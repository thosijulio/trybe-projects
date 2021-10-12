CREATE VIEW perfil_artistas AS
    SELECT 
        ART.Nome AS artista,
        ALB.Nome AS album,
        COUNT(*) AS seguidores
    FROM
        Artista AS ART
            INNER JOIN
        Album AS ALB ON ART.Id = ALB.Id_Artista
            INNER JOIN
        Usuario_Artista AS USU_ART ON USU_ART.Id_Artista = ART.Id
    GROUP BY artista , album
    ORDER BY seguidores DESC , artista , album;
