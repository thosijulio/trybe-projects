# Dia 22.4: Projeto - One For All (MySQL)

## &nbsp; Descrição do Projeto:
Neste projeto, foi disponibilizada uma tabela de dados (xlsx) não normalizada. Através dessa tabela, foi solicitado a construção um banco de dados relacional e, com esse banco, executei queries para encontrar as informações solicitadas.

## Habilidades Desenvolvidas:
  - Modelagem de Banco de Dados;
  - Identificação de entidades, atributos e relacionamentos;
  - Aplicação da 1ª, 2ª e 3ª Forma Normal;
  - Criação de tabelas;
  - Criação de VIEW's;
  - Alteração de tabelas existentes;
  - Criação de reações dinâmicas com TRIGGER.

## Requisitos do projeto:

### 1. Modelar, normalizar e criar o banco de dados `SpotifyClone` a partir de uma planilha de dados já existente. ✔️

Regras de negócio solicitadas:
  - Cada pessoa usuária pode possuir apenas um plano;
  - Uma pessoa artista pode ter vários álbuns;
  - Uma pessoa artista pode ser seguida por várias pessoas usuárias;
  - Cada álbum possui apenas uma pessoa artista como principal;
  - Cada álbum possui várias canções;
  - Cada canção está contida em apenas um álbum;
  - Uma pessoa usuária pode possuir apenas um plano;
  - Cada música do histórico de reprodução pode aparecer uma única vez por pessoa;
  - Uma pessoa usuária pode seguir várias pessoas artistas, mas cada pessoa artista pode ser seguida apenas uma vez por pessoa usuária.

### 2. Criar uma VIEW `estatisticas_musicais` que exiba três colunas: ✔️

  - Quantidade total de canções. Alias = "cancoes";
  - Quantidade total de artistas. Alias = "artistas";
  - Quantidade de álbuns. Alias = "albuns".

### 3. Criar uma VIEW `historico_reproducao_usuarios` que exiba duas colunas: ✔️
  - Nome da pessoa usuária. Alias = "usuario";
  - Nome da canção ouvida pela pessoa com base no seu histórico de reprodução.. Alias = 

Ordenar por nome da pessoa usuária em ordem alfabética e pelo nome da canção em ordem alfabética.

---

 <h1 align="center">
    <img alt="Trybe" src="https://github.com/thosijulio/trybe-projects/blob/main/trybe-logo.png"/>
</h1>
<h3 align=center>Me encontre:</h3>
<p align=center>
<a href="https://www.linkedin.com/in/thosijulio/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="thosijulio" height="20" width="20" /></a>
<a href="https://www.github.com/thosijulio/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="thosijulio" height="20" width="20" /></a>
<a href="https://www.instagram.com/thosijulio" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="thosijulio" height="20" width="20" /></a>
</p>
