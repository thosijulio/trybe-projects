# Dia 11.3: Projeto - Movie Cards Library

## &nbsp; Descrição do Projeto:
Foi desenvolvido uma biblioteca de cartões de filmes utilizando React. A biblioteca possui um cabeçalho e uma lista de cartões. Cada cartão representa um filme e possui uma imagem, título, subtítulo, sinopse e avaliação. 

Segue um exemplo de como a biblioteca deveria se parecer:

<p align="center">
  <img alt="exemplo de movie cards library" src="./movie-cards-library-example.png">
</p>

## Habilidades Desenvolvidas:
 * Inicialização de um projeto em **React**;
 * Utilização do JSX no **React**;
 * Utilização do **ReactDOM.render** para renderizar elementos numa página web;
 * Utilização do `import` para usar código externo;
 * Criação de componentes **React**;
 * Uso de `props` corretamente;
 * Composição de componentes corretamente;
 * Criação de múltiplos componentes dinamicamente;
 * Utilização de **PropTypes** para checar o tipo de uma prop no uso de um componente;
 * Utilização de **PropTypes** para garantir a presença de props obrigatórias no uso de um componente;
 * Utilização de **PropTypes** para checar que uma prop é um objeto de formato específico;
 * Utilização de **PropTypes** para garantir que uma prop é um array com elementos de um determinado tipo.

## Requisitos do projeto:

### 1 - Criar um componente `<Header />`. :heavy_check_mark:
Criação de um componente que represente o cabeçalho da página.
 * Renderizar o componente `<Header />`.
 
### 2 - Renderizar um texto no `<Header />`. :heavy_check_mark:
O texto deverá estar dentro de uma tag `h1`, que por sua vez deve estar dentro de uma tag `header`
 * Renderizar o texto "Movie Cards Library" dentro de `<Header />`.
 
### 3 - Criar um componente `<MovieList />`. :heavy_check_mark:
Criação de um componente que represente toda a área com os cartões de filmes. `<MovieList />` deve receber uma prop `movies`, que é um array de objetos com informações de um filme.
  
### 4 - Renderizar componentes `<MovieCard />` dentro de `<MovieList />`. :heavy_check_mark:
`<MovieList />` deve renderizar um componente `<MovieCard />` para cada objeto contido no array recebido na prop `movies`.
  
### 5 - Passar uma key para cada `<MovieCard />` renderizado. :heavy_check_mark:
`<MovieList />` deve renderizar `<MovieCard />`s de forma dinâmica. Ou seja, deve utilizar a função `map` para renderizar uma lista. Cada componente `<MovieCard />` deve receber uma prop `key` com o nome do filme.

### 6 - Criar um componente `<MovieCard />`. :heavy_check_mark:
Criação de um componente que represente um cartão de filme. `<MovieCard />` deve receber uma prop `movie`. Essa prop será um objeto, contendo as propriedades, `title`, `subtitle`, `storyline`, `imagePath` e `rating`.

### 7 - Renderizar a imagem do filme dentro de uma tag `img`. :heavy_check_mark:
`<MovieCard />` deve renderizar uma tag `img`, tendo como atributo `src` o valor da propriedade `imagePath` do objeto recebido como prop.

### 8 - Renderizar o título do filme dentro de uma tag `h4`. :heavy_check_mark:
`<MovieCard />` deve renderizar o título do filme dentro de uma tag `h4`. O título está contido na propriedade `title` do objeto recebido como prop.

### 9 - Renderize o subtítulo do filme dentro de uma tag `h5`. :heavy_check_mark:
`<MovieCard />` deve renderizar o subtítulo do filme dentro de uma tag `h5`. O subtítulo está contido na propriedade `subtitle` do objeto recebido como prop.

### 10 - Renderizar a sinopse do filme dentro de uma tag `p`. :heavy_check_mark:
`<MovieCard />` deve renderizar a sinopse do filme dentro de uma tag `p`. A sinopse está contida na propriedade `storyline` do objeto recebido como prop.

### 11 - Criar um componente `<Rating />`. :heavy_check_mark:
Criação de um componente que represente a avaliação de um filme.

### 12 - Renderizar a nota de um filme dentro de `Rating`. :heavy_check_mark:
`<Rating />` deve renderizar a nota do filme recebido na prop `rating` dentro de um elemento com a classe `rating`.

### 13 - Renderizar o componente `<Rating />` dentro de `<MovieCard />`. :heavy_check_mark:
`<MovieCard />` deve renderizar um componente `<Rating />`.

### 14 - Passar como prop para o componente `<Rating />` o atributo `rating`. :heavy_check_mark:
`<MovieCard />` deve passar para o componente `<Rating />` uma prop chamada `rating`. O valor dessa prop é a propriedade `rating` do objeto recebido na prop `movie`.

### 15 - Criar um componente `<App />`. :heavy_check_mark:
O componente `<App />` deve renderizar um componente `<Header />`.

### 16 - Renderizar `<MovieList />` dentro do componente `<App />`. :heavy_check_mark:
O componente `<App />` deve renderizar um componente `<MovieList />`, passando como prop `movies` a lista de filmes contida no arquivo `data.js`. Importar `data.js` dentro de `App.js`.

### 17 - Adicionar PropTypes a todos os componentes. :heavy_check_mark:
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
