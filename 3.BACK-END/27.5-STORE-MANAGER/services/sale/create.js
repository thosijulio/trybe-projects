const model = require('../../models');

const create = async (sales) => {
  const productsPromises = [];
  
  for (let index = 0; index < sales.length; index += 1) {
    productsPromises.push(model.product.find(sales[index].productId));
  }

  const products = await Promise.all(productsPromises);

  return !sales.some((sale, index) => sale.quantity >= products[index].quantity)
    ? model.sale.create(sales)
    : null;
};

module.exports = create;
