USE SpotifyClone;

DELIMITER $$

CREATE FUNCTION quantidade_musicas_no_historico (idDesejado INT)
RETURNS INT READS SQL DATA
BEGIN
DECLARE qtdeMusicas INT;
SELECT COUNT(*) FROM Usuario_Musica AS UM INNER JOIN Usuario AS U ON U.Id LIKE idDesejado AND U.Id = UM.Id_Usuario INTO qtdeMusicas;
RETURN qtdeMusicas;
END $$

DELIMITER ;
