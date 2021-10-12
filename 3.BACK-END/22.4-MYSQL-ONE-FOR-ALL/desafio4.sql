CREATE VIEW top_3_artistas AS
	SELECT 
		A.Nome AS artista, COUNT(*) AS seguidores
	FROM
		Artista AS A
			INNER JOIN
		Usuario_Artista AS UA ON UA.Id_Artista = A.Id
	GROUP BY artista
	ORDER BY seguidores DESC
	LIMIT 3;
