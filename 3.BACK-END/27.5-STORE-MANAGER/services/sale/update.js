const model = require('../../models');

const update = async (id, sale) => {
  const updatedSale = await model.sale.update(id, sale);
  return updatedSale;
};

module.exports = update;
