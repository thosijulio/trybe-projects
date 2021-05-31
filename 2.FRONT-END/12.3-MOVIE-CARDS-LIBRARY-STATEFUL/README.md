# Dia 12.3: Projeto - Movie Cards Library Stateful

## &nbsp; Descrição do Projeto:
Desenvolvimento de uma aplicação que consiste em uma biblioteca de cartões de filmes dinâmica utilizando React. A biblioteca é composta por:
* Um cabeçalho;
* Uma barra de busca, utilizada pra filtrar quais cartões serão exibidos na lista de cartões;
* Uma lista de cartões, onde cada cartão representa um filme e possui uma imagem, título, subtítulo, sinopse e avaliação;
* Um formulário para adicionar um novo cartão na biblioteca.

Segue um exemplo de como a biblioteca deveria se parecer:

<p align="center">
  <img alt="exemplo de Movie Card Library Stateful" src="https://github.com/thosijulio/trybe-projects/blob/main/2.FRONT-END/12.3-MOVIE-CARDS-LIBRARY-STATEFUL/preview.gif">
</p>

## Habilidades Desenvolvidas:
  - Leitura e uso do estado de um componente;
  - Inicialização de componente com estado pré-definido;
  - Atualização do estado de um componente;
  - Capturar eventos utilizando a sintaxe do React;
  - Criação de formulários utilizando sintaxe JSX com as tags : `input`, `textarea`, `select`, `form`;
  - Transmitir informações de componentes filhos para componentes pais via callbacks;

## Requisitos do projeto:

### 1 - Criação de um componente chamado `<SearchBar />` ✔️

Esse componente renderiza uma barra com filtros acima da listagem de cartões. Quais cartões serão mostrados no componente `<MovieList />` dependerá dos filtros escolhidos. `<SearchBar />` recebe como props:

  - `searchText`, uma string
  - `onSearchTextChange`, uma callback
  - `bookmarkedOnly`, um boolean
  - `onBookmarkedChange`, uma callback
  - `selectedGenre`, uma string
  - `onSelectedGenreChange`, uma callback
 
### 2 - Renderizar um formulário dentro de `<SearchBar />`

Dentro desse formulário há campos usados na filtragem de cartões.

### 3 - Renderizar um input do tipo texto dentro do formulário em `<SearchBar />`

- O input tem uma label associada com o texto: **"Inclui o texto:"**;
- A propriedade `value` do input recebe o valor da prop `searchText`;
- A propriedade `onChange` do input recebe o valor da prop `onSearchTextChange`.
  
### 4 - Renderizar um input do tipo checkbox dentro do formulário em `<SearchBar />`

- O input tem uma label associada com o texto: **"Mostrar somente favoritos"**;
- A propriedade `checked` do input recebe o valor da prop `bookmarkedOnly`;
- A propriedade `onChange` do input recebe o valor da prop `onBookmarkedChange`.
 
### 5 - Renderize um select dentro do formulário em `<SearchBar />`

- O select tem uma label associada com o texto: **"Filtrar por gênero"**;
- A propriedade `value` do select recebe o valor da prop `selectedGenre`;
- A propriedade `onChange` do select recebe o valor da prop `onSelectedGenreChange`;
- O `select` renderiza quatro tags `option`, com as opções de filtragem por gênero, na seguinte ordem:
   - `Todos`, com o valor `""`;
   - `Ação`, com o valor `action`;
   - `Comédia`, com o valor `comedy`;
   - `Suspense`, com o valor `thriller`.

### 6 - Criar um componente chamado `<AddMovie />`

Esse componente renderiza um formulário que permite adicionar na biblioteca um novo cartão de filme, dadas as seguintes informações do novo filme:
  - subtítulo
  - título
  - caminho da imagem
  - sinopse
  - avaliação
  - gênero

`<AddMovie />` deve receber como prop:

  - `onClick`, uma callback

O componente `<AddMovie />` possui como estado as seguintes propriedades:

  - `subtitle`: guarda o subtítulo preenchido no formulário por quem usa a aplicação;
  - `title`: guarda o título preenchido no formulário por quem usa a aplicação;
  - `imagePath`: guarda o caminho da imagem preenchido no formulário por quem usa a aplicação;
  - `storyline`: guarda a sinopse do filme escrita no formulário por quem usa a aplicação;
  - `rating`: guarda a nota de avaliação dada no formulário por quem usa a aplicação;
  - `genre`: guarda o gênero do filme selecionado no formulário por quem usa a aplicação.

O estado inicial do componente `<AddMovie />` deve ser:
  - `subtitle`: '';
  - `title`: '';
  - `imagePath`: '';
  - `storyline`: '';
  - `rating`: 0;
  - `genre`: 'action'.

### 7 - Renderizar um formulário dentro de `<AddMovie />`

Dentro desse formulário há campos usados para preencher informações do novo cartão a ser adicionado na biblioteca.

### 8 - Renderizar um input do tipo texto dentro do formulário em `<AddMovie />` para obter o título do novo filme

- O input tem uma label associada com o texto: **"Título"**;
- O input tem seu valor inicial provido pelo estado inicial do componente, via `title`;
- A propriedade `onChange` atualiza o estado de `<AddMovie />`, atribuindo a `title` o atual título contido no input.

### 9 - Renderizar um input do tipo texto dentro do formulário em `<AddMovie />` para obter o subtítulo do novo filme

- O input tem uma label associada com o texto: **"Subtítulo"**;
- O input tem seu valor inicial provido pelo estado inicial do componente, via `subtitle`;
- A propriedade `onChange` atualiza o estado de `<AddMovie />`, atribuindo a `subtitle` o atual subtítulo contido no input.

### 10 - Renderizar um input do tipo texto dentro do formulário em `<AddMovie />` para obter o caminho da imagem do novo filme

- O input tem uma label associada com o texto: **"Imagem"**;
- O input tem seu valor inicial provido pelo estado inicial do componente, via `imagePath`;
- A propriedade `onChange` atualiza o estado de `<AddMovie />`, atribuindo a `imagePath` o atual caminho da imagem contido no input.

### 11 - Renderizar uma `textarea` dentro do formulário em `<AddMovie />` para obter a sinopse do novo filme

- A `textarea` tem uma label associada com o texto: **"Sinopse"**;
- A `textarea` tem seu valor inicial provido pelo estado inicial do componente, via `storyline`;
- A propriedade `onChange` atualiza o estado de `<AddMovie />`, atribuindo a `storyline` a sinopse atual continda na `textarea`.

### 12 - Renderizar um `input` do tipo `number` dentro do formulário em `<AddMovie />` para obter a avaliação do novo filme

- O `input` tem uma label associada com o texto: **"Avaliação"**;
- O `input` tem seu valor inicial provido pelo estado inicial do componente, via `rating`;
- A propriedade `onChange` atualiza o estado de `<AddMovie />`, atribuindo a `rating` a avaliação atual continda no input.

### 13 - Renderizar um `select` do formulário em `<AddMovie />` para selecionar o gênero do novo filme

- O `select` tem uma label associada com o texto: **"Gênero"**;
- O `select` tem seu valor inicial provido pelo estado inicial do componente, via `genre`;
- A propriedade `onChange` atualiza o estado de `<AddMovie />`, atribuindo a `genre` o gênero atual selecionado;

- O `select` renderiza três tags `option`, com as opções de filtragem por gênero, na seguinte ordem:
   - `Ação`, com o valor `action`;
   - `Comédia`, com o valor `comedy`;
   - `Suspense`, com o valor `thriller`.

### 14 - Renderizar um botão do formulário em `<AddMovie />` para fazer uso dos dados do novo filme, contidos no estado de `<AddMovie />`

- O botão tem escrito o seguinte texto: **"Adicionar filme"**;
- A propriedade `onClick` do botão invoca uma função, em `<AddMovie />`, que:
  - Executa a callback passada para o componente `<AddMovie />` via props, chamada `onClick`, que recebe como parâmetro o estado atual de `<AddMovie />`;
  - Reseta o estado de `<AddMovie />`, voltando para o inicial, conforme mencionado anteriormente.

### 15 - Criar um componente chamado `<MovieLibrary />`

Esse componente renderiza a biblioteca de filmes que renderizará a `searchBar` e o `addMovies` para filtrar por filmes e adicionar um filme à biblioteca respectivamente.

`<MovieLibrary />` recebe como props:
  - `movies`, um array

### 16 - Configurar o estado inicial do componente `MovieLibray`

O componente `<MovieLibrary />` possui como estado as seguintes propriedades:
  - `searchText`: guarda o texto de busca por filmes;
  - `bookmarkedOnly`: um _boolean_ que guarda se é para filtrar por filmes favoritados ou não;
  - `selectedGenre`: guarda o gênero do filme selecionado para poder fazer a filtragem;
  - `movies`: guarda a lista de filmes.

O estado de `<MovieLibrary />` contém a lista de filmes e os filtros a serem aplicados sobre a listagem.

### 17 - Renderizar `<SearchBar />` dentro de `<MovieLibrary />`

- `searchText` oriundo do estado de `<MovieLibrary />` é passado para a prop `searchText` de `<SearchBar />`;
- A callback para atualizar o estado de `<MovieLibrary />` em `searchText` precisa ser passada para `<SearchBar />`;
- `bookmarkedOnly` oriundo do estado de `<MovieLibrary />` deve ser passado para a prop `bookmarkedOnly` de `<SearchBar />`;
- A callback para atualizar o estado de `<MovieLibrary />` em `bookmarkedOnly` precisa ser passada para `<SearchBar />`;
- `selectedGenre` oriundo do estado de `<MovieLibrary />` deve ser passado para a prop `selectedGenre` de `<SearchBar />`;
- A callback para atualizar o estado de `<MovieLibrary />` em `selectedGenre` precisa ser passada para `<SearchBar />`.

### 18 - Renderizar `<MovieList />` dentro de `<MovieLibrary />`

- Deve passar para a prop `movies` de `<MovieList />` todos os filmes filtrados;
- Quando o estado para `bookmarkedOnly` é falso, não é alterada a listagem de filmes a ser renderizada;
- Quando o estado para `bookmarkedOnly` é verdadeiro, deve ser renderizado por `<MovieList />` somente filmes favoritados;
- Quando o estado para `selectedGenre` é vazio, não é alterada a listagem de filmes a ser renderizada;
- Quando o estado para `selectedGenre` não é vazio, deve ser renderizado somente filmes com o mesmo gênero;
- Quando o estado para `searchText` é vazio, não é alterada a listagem de filmes a ser renderizada;
- Quando o estado para `searchText` não é vazio, deve ser renderizado por `<MovieList />` filmes que satisfaçam a uma das condições abaixo:
  - Filmes cujo título contém o que está presente em `searchText`, **ou**;
  - Filmes cujo subtítulo contém o que está presente em `searchText`, **ou**;
  - Filmes cuja sinopse contém o que está presente em` searchText`.

### 19 - Renderizar `<AddMovie />` dentro de `<MovieLibrary />`

- A callback que permite adicionar um novo filme ao final da lista precisa ser passada para `<AddMovie />`.

### 20 - Adicionar proptypes a todos os componentes

Todos os componentes que recebem props devem ter suas proptypes corretamente declaradas. 

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
