const model = require('../../models');

const create = async (sales) => {
  const [result] = await model.sale.create(sales);
  return result;
};

module.exports = create;
