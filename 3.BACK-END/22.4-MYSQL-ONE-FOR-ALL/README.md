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
  - Nome da canção ouvida pela pessoa com base no seu histórico de reprodução.

Ordenar por nome da pessoa usuária em ordem alfabética e pelo nome da canção em ordem alfabética.

### 4. Criar uma VIEW `top_3_artistas` que exiba as três pessoas artistas mais populares, com duas colunas: ✔️

  - Nome da pessoa artista. Alias = "artista";
  - Quantidade de pessoas que estão seguindo aquela pessoa artista. Alias = "seguidores".

Ordenar por quantidade de seguidores em ordem decrescente. Em caso de empate, ordenar pelo nome da pessoa artista em ordem alfabética.

### 5. Criar uma VIEW `top_2_hits_do_momento` que exiba duas colunas: ✔️

  - Nome da canção. Alias = "cancao";
  - Quantidade de pessoas que já escutaram a canção. Alias = "reproducoes".

Ordenar po número de reproduções em ordem decrescente. Em caso de empate, ordenar pelo nome da canção em ordem alfabética.

### 6. Criar uma VIEW `faturamento_atual` que exiba quatro colunas: ✔️

  - Menor valor de plano existente para uma pessoa usuária. Alias = "faturamento_minimo";
  - Maior valor de plano existente para uma pessoa usuária. Alias = "faturamento_maximo";
  - Valor médio dos planos possuídos por pessoas usuárias. Alias = "faturamento_medio";
  - Valor total obtido com os planos possuídos por pessuas usuárias. Alias = "faturamento_total".

Arredondas os valores para duas casas decimais.

### 7. Criar uma VIEW `perfil_artistas` que exiba três colunas: ✔️

  - Nome da pessoa artista. Alias = "artista";
  - Nome do álbum. Alias = "album";
  - Quantidade de pessoas seguidoras que aquela pessoa artista possui. Alias = "seguidores".

Ordenados por número de pessoas seguidoras em ordem decrescente. Em caso de empate, ordenar pelo nome da pessoa artista em ordem alfabética. Em caso de empate, ordenar os resultados pelo nome do álbum alfabeticamente.

### 8. Criar uma TRIGGER `trigger_usuario_delete` que: ✔️
  - É disparada sempre que uma pessoa usuária for excluída do banco de dados, refletindo essa exclusão em todas as tabelas que ela estiver.

### 9. Criar uma PROCEDURE `albuns_do_artista` que: ✔️
  - Receba como parâmetro o nome de uma pessoa artista e em retorno deve exibir duas colunas:
    - Nome da pessoa artista. Alias = "artista";
    - Nome do álbum. Alias = "album".

Ordenar pelo nome do álbum em ordem alfabética.

### 10. Criar uma FUNCTION `quantidade_musicas_no_historico` que: ✔️
  - Receba um código identificador de pessoa e exiba:
    - Quantidade de músicas presentes no histórico de reprodução dessa pessoa procurada.

### 11. Criar uma VIEW `cancoes_premium` que exiba: ✔️
  - O nome e a quantidade de vezes que cada canção foi tocada por pessoas usuárias do plano familiar ou universitário.

Agrupar pelo nome da canção e ordenar em ordem alfabética.

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
