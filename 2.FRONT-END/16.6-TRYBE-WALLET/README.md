# Dia 16.6: Projeto - Trybe Wallet

## &nbsp; Descrição do Projeto:
Neste projeto, foi desenvolvido uma carteira de controle de gastos com conversor de moedas. Ao utilizar essa aplicação um usuário deverá ser capaz de:
  - Adicionar, remover e editar um gasto;
  - Visualizar uma tabelas com seus gastos;
  - Visualizar o total de gastos convertidos para uma moeda de escolha;

## Habilidades Desenvolvidas:
 - Criação de um store Redux em aplicações React;
 - Criação de reducers no Redux em aplicações React;
 - Criação de actions no Redux em aplicações React;
 - Criação de dispatchers no Redux em aplicações React;
 - Conexão do Redux aos componentes React;
 - Criação de actions assíncronas na aplicação React que faz uso de Redux.

## Requisitos do projeto:

### 1. Criar uma página inicial de login ✔️

 - A rota para esta página deve ser ‘/’.

 - Criar um local para que a pessoa usuária insira seu email e senha.
 - Criar um botão com o texto ‘Entrar’.

### 2. Realizar as seguintes verificações nos campos de email, senha e botão: ✔️

 - O email está no formato válido, como 'alguem@alguem.com'.
 - A senha possui 6 ou mais caracteres.
 - Salvar o email no estado da aplicação, com a chave ***email***, assim que a pessoa usuária logar.
 - A rota deve ser mudada para '/carteira' após o clique no botão '**Entrar**'.

 ### 3. Utilizar o Redux para salvar no estado global as informações da pessoa logada ✔️

 - Salvar o email no estado da aplicação, com a chave email, assim que o usuário logar.
 - A rota deve ser mudada para `/carteira` quando o login for efetuado com sucesso.
 
### 4. Criar uma página para sua carteira com as seguintes características: ✔️

 - A rota para esta página deve ser `/carteira`

### 5. Criar um header para a página de carteira contendo as seguintes características: ✔️

 - Um elemento que exiba o email da pessoa usuária que fez login.
 - Um campo com a despesa total gerada pela lista de gastos.
 - Um campo que mostre qual câmbio está sendo utilizado, que será neste caso será 'BRL'.

### 6. Desenvolver um formulário para adicionar uma despesa contendo as seguintes características: ✔️

 - Um campo para adicionar valor da despesa.
   * O campo deverá ter a label `Valor`.
 - Um campo de texto para adicionar a descrição da despesa.
   * O campo deverá ter a label `Descrição`.
 - Um campo de select para adicionar em qual moeda será registrada a despesa.
   * O campo deverá ter a label `Moeda`.
   * O campo deverá ser um `<select>`.
   * As opções do select serão preenchidas através da consulta à API.
 - Um campo para adicionar qual método de pagamento será utilizado.
   * O campo deverá ter a label `Método de pagamento`.
   * Este campo deve ser um `<select>`. A pessoa usuária deve poder escolher entre os campos: 'Dinheiro', 'Cartão de crédito' e 'Cartão de débito'.
 - Um campo para selecionar uma categoria (tag) para a despesa.
   * Este campo deve ser um `<select>`. A pessoa usuária deve poder escolher entre os campos: 'Alimentação', 'Lazer', 'Trabalho', 'Transporte' e 'Saúde'.
   * O campo deverá ter a label `Tag`.

### 7. Implementar a lógica para preencher as opções do campo "Moedas", buscando as siglas das moedas da API: ✔️

 - Ao entrar na página `/carteira`, fazer uma requisição para a API das moedas e preencher as opções do `<select>` de "Moedas" com os valores retornados, utilizando as siglas das moedas.
 - As opções devem conter os valores: 'USD', 'CAD', 'EUR', 'GBP', 'ARS', 'BTC', 'LTC', 'JPY', 'CHF', 'AUD', 'CNY', 'ILS', 'ETH' e 'XRP'.
   * Esses valores devem vir da API através do endpoint: https://economia.awesomeapi.com.br/json/all.
   * Remover das informações trazidas pela API a opção 'USDT' (Dólar Turismo).

### 8. Desenvolver a opção de "Adicionar despesa" na tabela de gastos ✔️

 - Desenvolver a funcionalidade do botão "Adicionar despesa" de modo que ao clicar no botão, as seguintes ações sejam executadas:
   * Os valores dos campos devem ser salvos no estado da aplicação, na chave ***expenses***, dentro de um array contendo todos gastos que serão adicionados:
     * O `id` da despesa **deve** ser um número sequencial, começando em 0. Ou seja: a primeira despesa terá id 0, a segunda terá id 1, a terceira id 2, e assim por diante.
     * Salvar a cotação do câmbio feita no momento da adição para ter esse dado quando for efetuar uma edição do gasto.
 - Após adicionar a despesa, atualizar a soma total das despesas. Essa informação deve ficar no header.

   * As despesas salvas no Redux ficarão com um formato semelhante ao seguinte:
      <details>
      <summary>Clique para expandir.</summary>
      <p>

        ```javascript
          expenses: [{
            "id": 0,
            "value": "3",
            "description": "Hot Dog",
            "currency": "USD",
            "method": "Dinheiro",
            "tag": "Alimentação",
            "exchangeRates": {
              "USD": {
                "code": "USD",
                "name": "Dólar Comercial",
                "ask": "5.6208",
                ...
              },
              "CAD": {
                "code": "CAD",
                "name": "Dólar Canadense",
                "ask": "4.2313",
                ...
              },
              "EUR": {
                "code": "EUR",
                "name": "Euro",
                "ask": "6.6112",
                ...
              },
              "GBP": {
                "code": "GBP",
                "name": "Libra Esterlina",
                "ask": "7.2498",
                ...
              },
              "ARS": {
                "code": "ARS",
                "name": "Peso Argentino",
                "ask": "0.0729",
                ...
              },
              "BTC": {
                "code": "BTC",
                "name": "Bitcoin",
                "ask": "60299",
                ...
              },
              "LTC": {
                "code": "LTC",
                "name": "Litecoin",
                "ask": "261.69",
                ...
              },
              "JPY": {
                "code": "JPY",
                "name": "Iene Japonês",
                "ask": "0.05301",
                ...
              },
              "CHF": {
                "code": "CHF",
                "name": "Franco Suíço",
                "ask": "6.1297",
                ...
              },
              "AUD": {
                "code": "AUD",
                "name": "Dólar Australiano",
                "ask": "4.0124",
                ...
              },
              "CNY": {
                "code": "CNY",
                "name": "Yuan Chinês",
                "ask": "0.8278",
                ...
              },
              "ILS": {
                "code": "ILS",
                "name": "Novo Shekel Israelense",
                "ask": "1.6514",
                ...
              },
              "ETH": {
                "code": "ETH",
                "name": "Ethereum",
                "ask": "5184",
                ...
              },
              "XRP": {
                "code": "XRP",
                "name": "Ripple",
                "ask": "1.4",
                ...
              }
            }
          }]
        ```

        </p>
      </details>

### 9. Desenvolver uma tabela com os gastos contendo as seguintes características: ✔️

 - A tabela deve possuir um cabeçalho com os campos Descrição, Tag, Método de pagamento, Valor, Moeda, Câmbio utilizado, Valor convertido, Moeda de conversão e Editar/Excluir.
 - Utilizar os elementos corretos para o cabeçalho, para as linhas e para as células.
 - A tabela deve ser alimentada pelo estado da aplicação, que estará disponível na chave ***expenses*** que vem do reducer `wallet`.
 - O campo de Moeda e Moeda de Conversão deverão conter o nome da moeda.
 - O campo 'Moeda de conversão' exibirá 'Real'.
 - Utilizar o formato `0.00` (número - ponto - duas casas decimais).

### 10. Criar um botão para deletar uma despesa da tabela contendo as seguintes características: ✔️

 - O botão deve estar na linha da tabela.
 - Ao ser clicado, o botão deleta a linha da tabela, alterando o estado global.

## Requisitos Bônus

### 11. Criar um botão para editar uma despesa da tabela contendo as seguintes características: ✔️

 - O botão deve estar dentro da linha da tabela.
 - Ao ser clicado, o botão habilita um formulário para editar a linha da tabela. Ao clicar em "Editar despesa" ela é atualizada, alterando o estado global.
   * O botão para submeter a despesa para edição deverá conter o texto "Editar despesa"
   * O câmbio utilizado na edição deve ser o mesmo do cálculo feito na adição do gasto.

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
