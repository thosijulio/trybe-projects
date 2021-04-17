# Dia 8.6: Projeto - Zoo Functions

## &nbsp; Descrição do Projeto:
Projeto que simula um sistema de relatório de um zoológico. O sistema possui informações a respeito dos animais presentes no zoológico, colaboradores, horários de funcionamento e uma tabela de preços que varia de acordo com a idade das pessoas que o visitam.

## &nbsp; Habilidades:
 * let;
 * const;
 * arrow functions;
 * template literals;
 * spread operator;
 * parâmetro rest;
 * object destructuring;
 * array destructuring;
 * default destructuring;
 * abbreviation object literal;
 * default params;
 * higher order functions.


## Requisitos do projeto (Obrigatórios)

### 1 - Implementar a função animalsByIds. :heavy_check_mark:
Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids.
  - Caso receba nenhum parâmetro, necessário retornar um array vazio;
  - Ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id;
  - Ao receber mais de um id, retorna um array com as espécies referentes aos ids.
  
### 2. Implementar a função animalsOlderThan. :heavy_check_mark:
Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada.
  - Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada.
  
### 3. Implementar a função employeeByName. :heavy_check_mark:
Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas.
  - Sem parâmetros, retorna um objeto vazio;
  - Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário;
  - Quando provido o último nome do funcionário, retorna o objeto do funcionário.
  
### 4. Implementar a função createEmployee. :heavy_check_mark:
A função, a partir de informações recebidas nos parâmetros, é capaz de criar um objeto equivalente ao de uma pessoa colaboradora, retornando-o.
  - Cria um novo colaborador a partir de objetos contendo `informações pessoais` e `gerentes e animais gerenciados`.
  
### 5. Implementar a função isManager. :heavy_check_mark:
Verifica se uma pessoa colaboradora, a partir de seu id, ocupa cargo de gerência.
  - Testa se o id passado é de um gerente.

### 6. Implementar a função addEmployee. :heavy_check_mark:
A função irá adicionar uma nova pessoa colaboradora ao array `employees`, presente no arquivo `data.js`.
  - Adiciona um funcionário no fim da lista.

### 7. Implementar a função animalCount. :heavy_check_mark:
Esta função é responsável por contabilizar a quantidade de animais.
  - Sem parâmetros, retorna animais e suas quantidades;
  - Com o nome de uma espécie de animal, retorna somente a quantidade.

### 8. Implementar a função entryCalculator. :heavy_check_mark:
A partir da quantidade de visitantes e a faixa etária de cada um, esta função é responsável por retornar o preço total a ser cobrado.
  - Retorna 0 se nenhum argumento for passado;
  - Retorna 0 se um objeto vazio for passado;
  - Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos.

### 9. Implementar a função animalMap. :heavy_check_mark:
A função é responsável pelo mapeamento geográfico das espécies e seus animais, podendo ainda filtrá-los por ordem alfabética e gênero, por exemplo.
  - Sem parâmetros, retorna animais categorizados por localização;
  - Com a opção `includeNames: true` especificada, retorna nomes de animais;
  - Com a opção `sorted: true` especificada, retorna nomes de animais ordenados;
  - Com a opção `sex: 'female'` ou `sex: 'male'` especificada, retorna somente nomes de animais macho/fêmea;
  - Com a opção `sex: 'female'` ou `sex: 'male'` especificada e a opção `sort: true` especificada, retorna somente nomes de animais macho/fêmea com os nomes dos animais ordenados;
  - Só retorna informações ordenadas e com sexo se a opção `includeNames: true` for especificada.

### 10. Implementar a função schedule. :heavy_check_mark:
A função é responsável por disponibilizar as informações de horário para uma consulta, que pode querer ter acesso a todo o cronograma da semana ou apenas o cronograma de um dia específico.
  - Sem parâmetros, retorna um cronograma legível para humanos;
  - Se um único dia for passado, retorna somente este dia em um formato legível para humanos.
  
### 11. Implementar a função oldestFromFirstSpecies. :heavy_check_mark:
A função busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa colaboradora do parâmetro.
  - Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie.

### 12. Implementar a função increasePrices. :heavy_check_mark:
A função é responsável por aumentar o preço das visitas, com base no valor de aumento recebido no parâmetro, em porcentagem.
  - Ao passar uma porcentagem, incrementa todos os preços, arrendondados em duas casas decimais.

### 13. Implementar a função employeeCoverage. :heavy_check_mark:
  A função é responsável por consultar as espécies pela qual a pessoa colaborada, recebida no parâmetro através de seu `id`, `firstName` ou `lastName`, é responsável.
  - Sem parâmetros, retorna uma lista de funcionários e os animais pelos quais eles são responsáveis;
  - Com o id de um funcionário, retorna os animais pelos quais o funcionário é responsável;
  - Com o primeiro nome de um funcionário, retorna os animais pelos quais o funcionário é responsável;
  - Com o último nome de um funcionário, retorna os animais pelos quais o funcionário é responsável.

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
