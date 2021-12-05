const model = require('../../models');

const remove = async (id) => {
  const removedSale = await model.sale.remove(id);

  const productsPromises = [];
  
  for (let index = 0; index < removedSale.itensSold.length; index += 1) {
    productsPromises.push(model.product.find(removedSale.itensSold[index].productId));
  }

  const products = await Promise.all(productsPromises);
  
  removedSale.itensSold.forEach((sale, index) => {
    model.product.update(
      sale.productId,
      {
        name: products[index].name,
        quantity: products[index].quantity + sale.quantity,
      },
    );
  });
  return removedSale;
};

module.exports = remove;
