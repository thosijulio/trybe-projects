## Dia 6.6: Projeto - Página Inicial do Facebook

### &nbsp; Descrição do Projeto:
Desenvolver a página inicial do Facebook, tentando deixar o mais parecido possível (respeitando os requisitos).
Segue um exemplo de como o projeto pode se parecer depois de pronto:

<p align="center">
  <img alt="exemplo de Facebook Signup" src="./facebook.png">
</p>

### &nbsp; Habilidades:

  * Criação de formulários em HTML;

  * Utilização de CSS Flexbox para criar layouts flexíveis;

  * Criação de regras CSS específicas para serem aplicadas a dispositivos móveis;

  * Construição de páginas que alteram o seu layout de acordo com a orientação da tela;


## Requisitos do projeto (Obrigatórios)

### 1 - Criação de uma barra azul na parte superior da página. :heavy_check_mark:
  
  * A barra deve ter a classe top-bar
  * A classe top-bar deve determinar que o elemento é um flex container
  * A classe top-bar deve possuir a propriedade `background-color: rgb(66, 103, 178)`
  
### 2. Logotipo do Facebook no canto esquerdo na barra superior. :heavy_check_mark:

  * Deve existir um elemento img com a classe facebook-logo
  * O logotipo deve estar alinhado a esquerda dentro da barra azul
  * O atributo src do logotipo deve apontar para imgs/facebook-logo.png
  
### 3. Formulário de autenticação no canto direito da barra superior. :heavy_check_mark:

  * O formulário deve estar alinhado a direita dentro da barra azul
  * O formulário deve conter uma classe chamada facebook-login
  * O formulário deve ser um flex container
  
### 4. Criação de classe no CSS. :heavy_check_mark:

  * Essa classe deve se chamar form-group
  * Essa classe deve possuir a propriedade `display: flex`
  * O eixo principal dessa classe para ser o eixo vertical
  
### 5. Subcontainer para agrupar o rótulo e campo "E-mail ou telefone" dentro do formulário criado no requisito 3. :heavy_check_mark:

  * Este subcontainer deve ter a classe `form-group`
  * Dentro do subcontainer `form-group` criado, deve haver um rótulo com o id user-email-phone-label e o texto "Email ou telefone"
  * Dentro do subcontainer `form-group` criado, abaixo do rótulo deve haver campo de entrada de texto para receber o email ou o telefone do usuário com o id user-email-phone

### 6. Subcontainer para agrupar o rótulo e campo "Senha" dentro do formulário criado no requisito 3. :heavy_check_mark:

  * Deve haver um novo subcontainer utilizando a classe `form-group`
  * Dentro do novo subcontainer `form-group` criado, deve haver um rótulo com o id user-password-label e o texto "Senha"
  * Dentro do novo subcontainer `form-group` criado, abaixo do rótulo deve haver campo de entrada para senha com o id user-password

### 7. Subcontainer com o botão "Entrar" dentro do formulário criado no requisito 3. :heavy_check_mark:

  * Deve haver um novo subcontainer utilizando a classe `form-control`
  * Criar uma classe no CSS form-control com a propriedade `align-self: flex-end`
  * Dentro do novo subcontainer `form-control` criado, deve haver um botão com o id "button-login" e o texto "Entrar"
  * O botão deve estar alinhado a direita do campo de entrada para senha
  * Ao clicar no botão com o id #button-login deve exibir um alert com o valor do campo "Email ou telefone"

### 8. Container abaixo da barra azul para agrupar o conteúdo principal da página. :heavy_check_mark:

  * Criar um elemento com a classe main-content
  * O elemento deve ser um flex container no eixo horizontal
  * O elemento deve posicionado abaixo da barra azul

### 9. Subcontainer para colocar o conteúdo do lado esquerdo. :heavy_check_mark:

  * Criar o subcontainer dentro do container com a classe main-content
  * O subcontainer deve ter a classe left-content
  * A classe left-content deve ter uma largura de 800px
  * Dentro do container com a classe left-content deve existir um parágrafo com id facebook-slogan e o texto "O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida."
  * Dentro do container com a classe left-content deve existir abaixo do parágrafo com id facebook-slogan uma imagem com id facebook-networking e o src com o endereço `imgs/networking.png`.

### 10. Subcontainer para colocar o conteúdo do lado direito. :heavy_check_mark:

  * Criar um subcontainer dentro do container com a classe main-content
  * O novo subcontainer deve ter a classe right-content
  * A classe right-content deve ter uma largura de 300px
  * Utilizar na classe main-content a propriedade justify-content com o valor mais apropriado para alinhar os conteúdos
  * Dentro do subcontainer com a classe right-content deve existir um elemento h1 com o texto "Abra uma conta"
  * Dentro do subcontainer com a classe right-content deve existir um elemento com a classe quick-easy com o texto "É rápido e fácil." posicionado abaixo do texto "Abra uma conta"
  * Dentro do subcontainer com a classe right-content deve existir um elemento form abaixo do texto "É rápido e fácil."
  * O elemento com a classe right-content deve estar a direita do elemento com a classe left-content
  
### 11. Campo de entrada de texto para o nome do usuário dentro do formulário criado no requisito 10. :heavy_check_mark:

  * O campo deve ter o atributo name com o valor "firstname"
  * O campo deve ter um placeholder com o valor "Nome"


### 12. Campo de entrada de texto para o sobrenome do usuário dentro do formulário criado no requisito 10. :heavy_check_mark:

  * O campo deve ter o atributo name com o valor "lastname"
  * O campo deve ter um placeholder com o valor "Sobrenome"
  * Esse campo deve estar alinhado a direita do campo de Nome

### 13. Campo de entrada de texto para o celular ou email do usuário dentro do formulário criado no requisito 10. :heavy_check_mark:

  * O campo deve ter o atributo name com o valor "phone_email"
  * O campo deve ter um placeholder com o valor "Celular ou email"
  * Posicione esse campo abaixo do campo do nome do usuário

### 14. Crie um campo de entrada para senha do usuário dentro do formulário criado no requisito 10. :heavy_check_mark:

  * O campo deve ter o atributo name com o valor "password"
  * O campo deve ser do tipo "password"
  * O campo deve ter um placeholder com o valor "Nova senha"
  * Posicione esse campo abaixo do celular/email

### 15. Campo de entrada para data de nascimento do usuário dentro do formulário criado no requisito 10. :heavy_check_mark:

  * Um rótulo abaixo do campo nova senha com o id label-birthdate e o texto "Data de nascimento"
  * O campo deve ter o atributo name com o valor "birthdate"
  * O campo deve ser do tipo "text"
  * O campo deve ter um placeholder com o valor "dd/mm/aaaa"
  * Posicionar esse campo abaixo do rótulo

### 16. Campo de entrada para gênero do usuário dentro do formulário criado no requisito 10. :heavy_check_mark:

  * Um rótulo abaixo do campo nova senha com o id label-gender e o texto "Gênero"
  * O campo deve ser formado por três `radio buttons` com as opções "Feminino", "Masculino" e "Personalizado"
  * Os `radio buttons` devem ter o atributo name com o valor "gender"
  * Posicionar os radio buttons para ficar na mesma linha
  * Posicionar os radio buttons para ficar abaixo do label

### 17. Botão para finalizar o cadastro dentro do formulário criado no requisito 10.

  * Um botão com o texto "Cadastre-se" e id "facebook-register"
  * Deve ter a propriedade type igual a submit

### 18. Validar se todos os campos foram preenchidos ao clicar no botão Cadastre-se.

  * Exibir uma mensagem "Campos inválidos" dentro do formulário caso pelo menos um campo não esteja preenchido

### 19. Adicionar um novo campo de texto no formulário se a pessoa usuária selecionar a opção `Personalizado` no campo Gênero.

  * O novo campo dever ser uma campo de texto com o atributo name "gender-custom" e um placeholder "Gênero (opcional)"
  * O novo campo deve estar posicionado entre as opções de gênero e o botão "Cadastrar-se"

### 20. Substitua o conteúdo do container com a classe right-content se o formulário estiver completamente preenchido e validado.

  * Deve haver um texto no modelo "Olá, Jonh Doe" (substitua John Doe pelo nome e sobrenome preenchido no formulário)
  * Exibir o e-mail ou telefone
  * Não exibir a senha
  * Exibir a data de nascimento
  * Caso a opção selecionada no campo Gênero seja Feminino exibir "Feminino"
  * Caso a opção selecionada no campo Gênero seja Masculino exibir "Masculino"
  * Caso a opção selecionada no campo Gênero seja Personalizado exibir "Personalizado":

## Requisito Bônus

**Desenvolvimento da versão mobile do Facebook.**

<p align="center">
  <img alt="Página Facebook (versão mobile)" src="./facebook-mobile.png">
</p>

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
