const model = require('../../models');

const create = async (sales) => {
  const productsPromises = [];
  
  for (let index = 0; index < sales.length; index += 1) {
    productsPromises.push(model.product.find(sales[index].productId));
  }

  const products = await Promise.all(productsPromises);
  if (!sales.some((sale, index) => sale.quantity >= products[index].quantity)) {
    sales.forEach((sale, index) => {
      model.product.update(
        sale.productId,
        {
          name: products[index].name,
          quantity: products[index].quantity - sale.quantity,
        },
      );
    });
    return model.sale.create(sales);
  }

  return null;
};

module.exports = create;
