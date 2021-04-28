## Dia 5.9: Projeto - Carta misteriosa

### &nbsp; Descrição do Projeto:
Desenvolver um gerador de cartas misteriosas.
Ou seja, dado um valor digitado em um campo de texto, apresentar as palavras com uma aparência de uma carta onde cada palavra possui uma estilização própria.
Segue um exemplo de como o projeto se parece depois de pronto:
<p align="center">
  <img src="./mistery-letter-example.gif">
</p>

## Requisitos do projeto (Obrigatórios)

### 1 - Um `input` com o id=\"carta-texto\" onde a pessoa usuária poderá digitar o conteúdo da carta :heavy_check_mark:

### 2 - Um Parágrafo com o id=\"carta-gerada\" onde a pessoa usuária verá o resultado de sua carta misteriosa. :heavy_check_mark:

### 3 - Um Botão com id=\"criar-carta\" e ao clicar nesse botão, a carta misteriosa deve ser gerada. :heavy_check_mark:

- Cada palavra deve aparecer dentro de uma tag `span`.
- As tags `span` devem ser adicionadas como filhas do parágrafo que possui o id `carta-gerada`.

### 4 - Ao criar uma carta através do botão com id="criar-carta", o `input` com id="carta-texto" deve permanecer com o texto digitado. :heavy_check_mark:

### 5 - Se a pessoa usuária não preencher o campo ou preencher com apenas espaços vazios adicionar a mensagem 'Por favor, digite o conteúdo da carta.'. :heavy_check_mark:

- A mensagem deverá ser exibida no elemento `p` com o `id="carta-gerada".

### 6 - Criar a classe `newspaper`. :heavy_check_mark:

- `background-color` com o valor `antiquewhite`
- `font-family` com o valor `Times New Roman`
- `font-weight` com o valor `bold`

### 7 - Criar a classe `magazine1`. :heavy_check_mark:

- `background-color` com o valor `teal`
- `color` com o valor `white`
- `font-family` com o valor `Verdana`
- `font-weight` com o valor `900`
- `text-transform` com o valor `uppercase`

### 8 - Criar a classe `magazine2`. :heavy_check_mark:
 
- `background-image` com a imagem `images/pink-pattern.png`
- `color` com o valor `fuchsia`
- `font-family` com o valor `Verdana`
- `font-weight` com o valor `900`

### 9 - Criar a classe `medium`. :heavy_check_mark:

- `font-size` com o valor `20px`
- `padding` com o valor `8px`

### 10 - Criar a classe `big`. :heavy_check_mark:

- `font-size` com o valor `30px`
- `padding` com o valor `10px`

### 11 - Criar a classe `reallybig`. :heavy_check_mark:

- `font-size` com o valor `40px`
- `padding` com o valor `15px

### 12 - Criar a classe `rotateleft`. :heavy_check_mark:

- `transform` com o valor `rotate(-5deg)`

### 13 - Criar a classe `rotateright`. :heavy_check_mark:

- `transform` com o valor `rotate(5deg)`

### 14 - Criar a classe `skewleft`. :heavy_check_mark:

- `transform` com o valor `skewX(10deg)`;

### 15 - Criar a classe `skewright`. :heavy_check_mark:

- `transform` com o valor `skewX(-10deg)`;

### 16 - As classes devem ser adicionadas de forma aleatória a fim de estilizar as palavras. :heavy_check_mark:

- As classes devem ser adicionadas às tags `span` de forma **aleatória**.
- Adicione pelo menos mais de uma classe em uma palavra.
* As classes possuem os seguintes grupos de estilo: 
  - `newspaper`, `magazine1`, `magazine2` (Grupo estilo)
  - `medium`, `big`, `reallybig` (Grupo tamanho)
  - `rotateleft`, `rotateright` (Grupo rotação)
  - `skewleft`, `skewright` (Grupo inclinação)
- As palavras não podem conter mais de uma classe por grupo. Não precisa usar todos os grupos em uma palavra.

## Requisitos Bônus:

### 17 - Após gerar uma carta misteriosa, crie a possibilidade de alterar o estilo de uma palavra específica ao clicar nela. :heavy_check_mark:

- Ao clicar em uma palavra, um novo estilo **aleatório** deve ser aplicado.
- O número de mudanças deve ser ilimitado;

### 18 - Criar um parágrafo com o id=\"carta-contador\" onde existirá um contador de palavras. ✔️

- Esse contador deve informar a quantidade de palavras presentes na carta misteriosa gerada.
- Ao criar uma carta o elemento `p` com o `id="carta-contador",  é atualizado com o número de palavras da carta (valor numérico).

 <h1 align="center">
    <img alt="Trybe" src="https://github.com/thosijulio/trybe-projects/blob/main/trybe-logo.png"/>
</h1>
<h3 align=center>Me encontre:</h3>
<p align=center>
<a href="https://www.linkedin.com/in/thosijulio/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="thosijulio" height="20" width="20" /></a>
<a href="https://www.github.com/thosijulio/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="thosijulio" height="20" width="20" /></a>
<a href="https://www.instagram.com/thosijulio" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="thosijulio" height="20" width="20" /></a>
</p>
