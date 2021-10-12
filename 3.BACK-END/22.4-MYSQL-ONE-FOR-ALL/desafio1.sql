DROP DATABASE IF EXISTS SpotifyClone;

CREATE DATABASE SpotifyClone;

USE SpotifyClone;

CREATE TABLE Plano (
    Id INT AUTO_INCREMENT,
    Nome VARCHAR(20) NOT NULL,
    Valor DECIMAL(4, 2) NOT NULL,
    PRIMARY KEY (Id)
);

CREATE TABLE Artista (
    Id INT AUTO_INCREMENT,
    Nome VARCHAR(50) NOT NULL,
    PRIMARY KEY (Id)
);

CREATE TABLE Album (
    Id INT AUTO_INCREMENT,
    Nome VARCHAR(50) NOT NULL,
    Id_Artista INT NOT NULL,
    PRIMARY KEY (Id),
    FOREIGN KEY (Id_Artista)
        REFERENCES Artista (Id)
);

CREATE TABLE Musica (
    Id INT AUTO_INCREMENT,
    Nome VARCHAR(50) NOT NULL,
    Id_Album INT NOT NULL,
    Id_Artista INT NOT NULL,
    PRIMARY KEY (Id),
    FOREIGN KEY (Id_Album)
        REFERENCES Album (Id),
    FOREIGN KEY (Id_Artista)
        REFERENCES Artista (Id)
);

CREATE TABLE Usuario (
    Id INT AUTO_INCREMENT,
    Nome VARCHAR(50) NOT NULL,
    Idade INT NOT NULL,
    Id_Plano INT NOT NULL,
    PRIMARY KEY (Id),
    FOREIGN KEY (Id_Plano)
        REFERENCES Plano (Id)
);

CREATE TABLE Usuario_Artista (
    Id_Usuario INT,
    Id_Artista INT,
    PRIMARY KEY (Id_Usuario , Id_Artista),
    FOREIGN KEY (Id_Usuario)
        REFERENCES Usuario (Id),
    FOREIGN KEY (Id_Artista)
        REFERENCES Artista (Id)
);

CREATE TABLE Usuario_Musica (
    Id_Usuario INT,
    Id_Musica INT,
    PRIMARY KEY (Id_Usuario , Id_Musica),
    FOREIGN KEY (Id_Usuario)
        REFERENCES Usuario (Id),
    FOREIGN KEY (Id_Musica)
        REFERENCES Musica (Id)
);

INSERT INTO Plano(Nome, Valor) VALUES ('gratuito', 0), ('universitario', 5.99), ('familiar', 7.99);
INSERT INTO Artista(Nome) VALUES ('Walter Phoenix'), ('Peter Strong'), ('Lance Day'), ('Freedie Shannon');
INSERT INTO Album(Nome, Id_Artista) VALUES ('Envious', 1), ('Exuberant', 1), ('Hallowed Steam', 2), ('Incandescent', 3), ('Temporary Culture', 4); 
INSERT INTO Musica(Nome, Id_Album, Id_Artista) VALUES ('Soul For Us', 1, 1), ('Reflections Of Magic', 1, 1), ('Dance With Her Own', 1, 1), ('Troubles Of My Inner Fire', 2, 1), ('Time Fireworks', 2, 1), ('Magic Circus', 3, 2), ('Honey, So Do I', 3, 2), ('Sweetie, Let\'s Go Wild', 3, 2), ('She Knows', 3, 2), ('Fantasy For Me', 4, 3), ('Celebration Of More', 4, 3), ('Rock His Everything', 4, 3), ('Home Forever', 4, 3), ('Diamond Power', 4, 3), ('Honey, Let\' Be Silly', 4, 3), ('Thang Of Thunder', 5, 4), ('Words Of Her Life', 5, 4), ('Without My Streets', 5, 4);
INSERT INTO Usuario(Nome, Idade, Id_Plano) VALUES ('Thati', 23, 1), ('Cintia', 35, 3), ('Bill', 20, 2), ('Roger', 40, 1);
INSERT INTO Usuario_Artista(Id_Usuario, Id_Artista) VALUES (1, 1), (1, 4), (1, 3), (2, 1), (2, 3), (3, 2), (3, 1), (4, 4);
INSERT INTO Usuario_Musica(Id_Usuario, Id_Musica) VALUES (1, 1), (1, 6), (1, 14), (1, 16), (2, 13), (2, 17), (2, 2), (2, 15), (3, 4), (3, 16), (3, 6), (4, 3), (4, 18), (4, 11);
