USE SpotifyClone;

DELIMITER $$

CREATE PROCEDURE albuns_do_artista(IN inNomeArtista VARCHAR(50))
BEGIN
SELECT ART.Nome as artista, ALB.Nome as album FROM Artista AS ART INNER JOIN Album AS ALB ON ART.Id = ALB.Id_Artista WHERE ART.Nome LIKE CONCAT('%', inNomeArtista, '%');
END $$

DELIMITER ;
