const model = require('../../models');

const remove = async (id) => {
  const removedSale = await model.sale.remove(id);
  return removedSale;
};

module.exports = remove;
