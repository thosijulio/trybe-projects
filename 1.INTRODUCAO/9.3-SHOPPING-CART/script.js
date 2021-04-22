function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function createProductList() {
  return fetch('https://api.mercadolibre.com/sites/MLB/search?q=$computador')
   .then((response) => response.json())
   .then((list) => list.results);
 }

 function uploadList() {
  createProductList()
  .then((list) => {
    const sectionItems = document.querySelector('.items');
    list.forEach((product) => {
      const sku = product.id;
      const name = product.title;
      const image = product.thumbnail;
      sectionItems.appendChild(createProductItemElement({ sku, name, image }));
    });
  });
}

window.onload = function onload() { 
  uploadList();
};

/*
function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  const buttonAdd = document.getElementsByClassName('item__add');
  console.log(buttonAdd.length);
}

cartItemClickListener('click');

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}
*/
