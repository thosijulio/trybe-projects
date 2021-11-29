const model = require('../../models/index');

const create = async (product) => {
  const { name } = product;
  const productExist = await model.product.findByName(name);
  if (productExist) {
    return null;
  }
  const newProduct = await model.product.create(product);
  return newProduct[0];
};

module.exports = create;
