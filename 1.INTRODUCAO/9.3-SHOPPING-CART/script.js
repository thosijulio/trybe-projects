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

 function cartItemClickListener(event) {
   return event;
}
cartItemClickListener();

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

function addToCart() {
  const buttonAdd = document.getElementsByClassName('item__add');
  const cartList = document.querySelector('ol');
  for (let index = 0; index < buttonAdd.length; index += 1) {
    buttonAdd[index].addEventListener('click', () => {
      const itemSku = buttonAdd[index].parentNode.childNodes[0].innerText;
      fetch(`https://api.mercadolibre.com/items/${itemSku}`)
      .then((response) => response.json())
      .then((object) => {
        const itemToAddCart = {
          sku: object.id,
          name: object.title,
          salePrice: object.price,
        };
        cartList.appendChild(createCartItemElement(itemToAddCart));
      });
      // createCartItemElement(objectToAdd);
    });
  }
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
    addToCart();
  });
}

/*
function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
} */

window.onload = function onload() { 
  uploadList();
};