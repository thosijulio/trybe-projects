const model = require('../../models/index');

const remove = async (id) => {
  const { value } = await model.product.remove(id);
  return value;
};

module.exports = remove;
