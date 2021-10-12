CREATE VIEW estatisticas_musicais AS
SELECT 
    (SELECT 
            COUNT(*)
        FROM
            Musica) AS cancoes,
    (SELECT 
            COUNT(*)
        FROM
            Artista) AS artistas,
    (SELECT 
            COUNT(*)
        FROM
            Album) AS albuns;
