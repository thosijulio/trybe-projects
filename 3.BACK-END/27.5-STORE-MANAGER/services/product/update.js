const model = require('../../models');

const update = async (product, id) => {
  const result = await model.product.update(id, product);
  return result;
};

module.exports = update;
