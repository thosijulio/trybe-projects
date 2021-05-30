# Dia 11.3: Projeto - Movie Cards Library

## &nbsp; Descrição do Projeto:
Criação um CRUD de uma biblioteca de cartões de filmes em React. CRUD significa: Create, Read, Update and Delete.

Adicionar um novo filme à lista - CREATE;
Listar todos os filmes cadastrados, com uma página de informações resumidas sobre cada filme e uma página de informações detalhadas de um filme selecionado - READ;
Editar um filme da lista - UPDATE;
E apagar um filme da lista - DELETE;

Segue um exemplo de como a biblioteca deveria se parecer:

<p align="center">
  <img alt="exemplo de movie cards library CRUD" src="./movie-cards-library-crud-example.gif">
</p>

## Habilidades Desenvolvidas:
 - Utilização do `componentDidMount` para executar uma ação após o componente ser inserido no DOM;
 - Utilização do `shouldComponentUpdate` para avaliar se uma atualização do componente deve ou não acontecer naquele momento;
 - Utilização do `componentDidUpdate` para executar uma ação após o componente ser atualizado;
 - Utilização do `componentWillUnmount` para realizar uma ação antes de o componente ser desmontado;
 - Utilização do `props.children` para acessar os filhos de um componente React e interagir com eles;
 - Utilização do `componente BrowserRouter` corretamente;
 - Criação de links de navegação na aplicação com o componente Link;
 - Criação de rotas, mapeando o caminho da URL com o componente correspondente, via Route;
 - Estruturação e organização das rotas da aplicação com o componente Switch;
 - Uso do componente Redirect pra alternar entre rotas.

## Requisitos do projeto:

### 1 - Renderizar `BrowserRouter` no componente `App` usando rotas

Adicionar um `BrowserRouter` pra criar as rotas da aplicação. 

- A rota `/` renderiza a página MovieList
- A rota `/movies/:id` renderiza a página MovieDetails
- A rota `/movies/new` renderiza a página NewMovie
- A rota `/movies/:id/edit` renderiza a página EditMovie
- Qualquer rota não declarada renderiza a página NotFound
 
### 2 - Fazer uma requisição para buscar e mostrar a lista de filmes quando `MovieList` for montado 

Para buscar a lista, a função já existente `getMovies` importada do módulo `movieAPI` em `MovieList` foi usada. Essa função retorna uma _promise_. A requisição deve ser feita no momento em que o `MovieList` for montado no DOM. Enquanto a requisição estiver em curso, `MovieList` deve renderizar o componente `Loading`.
Uma vez que a requisição retornar, o resultado deve ser renderizado. Para cada filme, renderizar um componente `MovieCard`.
 
### 3 - Inserir um link para a página de detalhes de um filme dentro de `MovieCard`

Todos os `MovieCard`s devem possuir em seu conteúdo, pelo menos, o título, a sinopse e um link com o texto "VER DETALHES" que aponta para a rota `movies/:id`, onde `:id` é o id do filme. Esta rota exibirá informações detalhadas de um filme.
  
### 4 - Fazer uma requisição para buscar o filme que deverá ser renderizado dentro de `Movie Details`

`MovieDetails` se comporta de forma muito semelhante ao `MovieList`. Ao ser montado, deve fazer uma requisição utilizando a função `getMovie`, passando o id do filme. O componente `Loading` deve ser renderizado enquanto a requisição estiver em curso. Após terminar, deve-se renderizar um card com mais detalhes sobre o filme, contendo:

  - Uma `<img>` com a imagem do filme e `alt='Movie Cover'`;
  - Título;
  - Subtítulo;
  - Sinopse;
  - Gênero;
  - Avaliação;
  - um link com o texto "EDITAR" apontando para a rota `/movies/:id/edit` e um link apontando para a rota raiz (`/`) com o texto "VOLTAR".

### 5 - Realizar uma requisição para buscar o filme que será editado em `EditMovie`

Ao ser montada, a página de edição do filme deve fazer uma requisição pra buscar o filme que será editado e deve, ao ter seu formulário submetido, atualizar o filme e redirecionar a página pra rota raíz.

### 6 - Inserir um link na página inicial para `NewMovie` para criar novos cartões

O link deve conter o texto "ADICIONAR CARTÃO" e apontar para a rota `/movies/new`, contendo um formulário para criar novos cartões.
Na rota `/movies/new`, utilizando a callback passada para `MovieForm`, `NewMovie` deve criar um novo cartão utilizando a função `createMovie` do módulo `movieAPI`. Após o fim da requisição, `NewMovie` deve redirecionar o app para a página inicial, contento o novo cartão.

## Requisitos bônus:

### 7 - Adicionar um link para deletar um cartão em `MovieDetails`

Ao clicar no link, a aplicação deve fazer uma requisição utilizando a função `deleteMovie` do módulo `movieAPI`. Após finalizar a requisição, redirecionar o app para a página inicial. O cartão apagado não deverá mais se encontrar na lista.

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
