const model = require('../../models/index');

const find = async (id) => {
  const result = id ? await model.sale.find(id) : await model.sale.find();
  return result;
};

module.exports = find;