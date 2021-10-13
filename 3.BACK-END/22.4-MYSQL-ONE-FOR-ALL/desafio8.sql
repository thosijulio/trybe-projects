USE SpotifyClone;

DELIMITER $$

CREATE TRIGGER trigger_usuario_delete
BEFORE DELETE ON Usuario
FOR EACH ROW
BEGIN
DELETE FROM Usuario_Musica WHERE Id_Usuario = OLD.Id;
DELETE FROM Usuario_Artista WHERE Id_Usuario = OLD.Id;
END $$

DELIMITER ;
