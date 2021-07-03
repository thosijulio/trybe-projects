# Dia 15.4: Projeto - Testes em React

## &nbsp; Descrição do Projeto:
Este projeto foi desenvolvido apenas os testes para uma aplicação React. A partir de uma aplicação já criada o configurada, foi feito os testes necessários utilizando Jest e a biblioteca React Testing Library.

## Habilidades Desenvolvidas:
 - Utilização dos seletores (queries) da React-Testing-Library em testes automatizados;
 - Simulação de eventos com a React-Testing-Library em testes automatizados;
 - Testes de fluxos lógicos assíncronos com a React-Testing-Library;
 - Escrita de testes que permitam a refatoração da estrutura dos componentes da aplicação sem necessidade de serem alterados;
 - Criação de mocks de APIs utilizando fetch;
 - Testar inputs.

## Requisitos do projeto:

### 1 - Testar o componente `<App.js />` ✔️

  - Testar se a página principal da Pokédex é renderizada ao carregar a aplicação no caminho de URL `/`.
  - Testar se o topo da aplicação contém um conjunto fixo de links de navegação.
  - Testar se a aplicação é redirecionada para a página inicial, na URL `/` ao clicar no link `Home` da barra de navegação. 
  - Testar se a aplicação é redirecionada para a página de `About`, na URL `/about`, ao clicar no link `About` da barra de navegação. 
  - Testar se a aplicação é redirecionada para a página de `Pokémons Favoritados`, na URL `/favorites`, ao clicar no link `Favorite Pokémons` da barra de navegação.
  - Testar se a aplicação é redirecionada para a página `Not Found` ao entrar em uma URL desconhecida.
 
### 2. Testar o componente `<About.js /.` ✔️

  - Testar se a página contém as informações sobre a Pokédex.
  - Testar se a página contém um heading `h2` com o texto `About Pokédex`.
  - Testar se a página contém dois parágrafos com texto sobre a Pokédex.
  - Testar se a página contém a seguinte imagem de uma Pokédex: `https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png`.
 
### 3. Testar o componente `<FavoritePokemons.js />` ✔️

  - Testar se é exibido na tela a mensagem `No favorite pokemon found`, se a pessoa não tiver pokémons favoritos.
  - Testar se é exibido todos os cards de pokémons favoritados.
  - Testar se nenhum card de pokémon é exibido, se ele não estiver favoritado.
 
### 4. Testar o componente `<NotFound.js />` ✔️

  - Testar se página contém um heading `h2` com o texto `Page requested not found 😭`;
  - Testar se página mostra a imagem `https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif`.

### 5. Testar o componente `<Pokedex.js />` ✔️

  - Testar se página contém um heading `h2` com o texto `Encountered pokémons`.
  - Testar se é exibido o próximo Pokémon da lista quando o botão `Próximo pokémon` é clicado.
  - Testar se é mostrado apenas um Pokémon por vez.
  - Testar se a Pokédex tem os botões de filtro.
  - Testar se a Pokédex contém um botão para resetar o filtro
  - Testar se é criado, dinamicamente, um botão de filtro para cada tipo de Pokémon.
  - O botão de `Próximo pokémon` deve ser desabilitado quando a lista filtrada de Pokémons tiver um só pokémon.

### 6. Testar o componente `<Pokemon.js />` ✔️

  - Testar se é renderizado um card com as informações de determinado pokémon.
  - Testar se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon. O link deve possuir a URL `/pokemons/<id>`, onde `<id>` é o id do Pokémon exibido;
  - Testar se ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação para a página de detalhes de Pokémon. 
  - Testar também se a URL exibida no navegador muda para `/pokemon/<id>`, onde `<id>` é o id do Pokémon cujos detalhes se deseja ver;
  - Testar se existe um ícone de estrela nos Pokémons favoritados.

### 7. Testar o componente `<PokemonDetails.js />` ✔️

  - Testar se as informações detalhadas do Pokémon selecionado são mostradas na tela.
  - Testar se existe na página uma seção com os mapas contendo as localizações do pokémon
  - Testar se o usuário pode favoritar um pokémon através da página de detalhes.

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
