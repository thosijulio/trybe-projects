const model = require('../../models');

const create = async (sales) => {
  const productsPromises = [];
  
  for (let index = 0; index < sales.length; index += 1) {
    productsPromises.push(model.product.find(sales[index].productId));
  }

  const products = await Promise.all(productsPromises);
<<<<<<< HEAD
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
=======

  return !sales.some((sale, index) => sale.quantity >= products[index].quantity)
    ? model.sale.create(sales)
    : null;
>>>>>>> 47e89b9cb5faa20be499748b1489e464a1658a60
};

module.exports = create;
