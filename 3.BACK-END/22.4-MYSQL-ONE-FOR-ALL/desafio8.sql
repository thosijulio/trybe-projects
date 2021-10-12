USE SpotifyClone;

DELIMITER $$

CREATE TRIGGER trigger_usuario_delete
BEFORE DELETE ON Usuario
FOR EACH ROW
BEGIN
DELETE FROM Usuario_Musica AS UM WHERE UM.Id_Usuario = OLD.Id;
DELETE FROM Usuario_Artista AS UA WHERE UA.Id_Usuario = OLD.Id;
END $$

DELIMITER ;
