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
  const itemsSection = document.querySelector('.items');
  const tagP = document.createElement('p');
  tagP.className = 'loading';
  tagP.innerText = 'loading...';
  itemsSection.appendChild(tagP);
  return fetch('https://api.mercadolibre.com/sites/MLB/search?q=$computador')
   .then((response) => {
    itemsSection.innerText = '';
    return response.json();
  })
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

async function sumCartValue() {
  const list = document.querySelector('ol');
  const priceSite = document.querySelector('.total-price');
  let sum = 0;
  const priceCartItems = [];
  for (let index = 0; index < list.childNodes.length; index += 1) {
    priceCartItems.push(parseFloat(list.childNodes[index].innerText.split('$')[1]));
  }
  if (priceCartItems.length > 0) {
    priceCartItems.forEach((value) => {
        sum += value;
        priceSite.innerText = Number(sum.toFixed(2));
      });
  } else priceSite.innerText = 0;
}

function saveCart() {
  const list = document.querySelector('ol');
    for (let index = 0; index < list.childNodes.length; index += 1) {
      localStorage.setItem(index, list.childNodes[index].innerText);
    }
    sumCartValue();
}

async function deleteCart() {
  const list = document.querySelector('ol');
  const eraseButton = document.querySelector('.empty-cart');
  eraseButton.addEventListener('click', () => {
    list.innerText = '';
    saveCart();
    sumCartValue();
  });
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
        const itemToAddCart = { sku: object.id,
          name: object.title,
          salePrice: object.price,
        };
        cartList.appendChild(createCartItemElement(itemToAddCart));
      })
      .then(() => saveCart());
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

function deleteItemCart() {
  const list = document.querySelector('ol');
  list.addEventListener('click', (event) => {
    list.removeChild(event.target);
    saveCart();
  });
}

function loadCart() {
  const list = document.querySelector('ol');
  const listSize = localStorage.length;

  for (let index = 0; index < listSize; index += 1) {
    const li = document.createElement('li');
    li.className = 'cart__item';
    li.innerText = localStorage[index];
    list.appendChild(li);
  }
  localStorage.clear();
}
/*
function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
} */

window.onload = function onload() { 
  uploadList();
  deleteItemCart();
  loadCart();
  sumCartValue();
  deleteCart();
};

// teste