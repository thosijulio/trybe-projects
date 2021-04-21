

async function createProductItemElement({ sku, name, image }) {

  const arrComputer = await exercicio1();
  console.log(arrComputer);

}

createProductItemElement('teste1', 'teste2', 'teste3');

async function exercicio1() {
  let computersResult = [];
  return fetch('https://api.mercadolibre.com/sites/MLB/search?q=$Computador')
  .then((archive) => archive.json())
  .then((list) => list.results);
}
