const { ObjectId } = require('mongodb');
const model = require('../../models/index');

const find = async (id) => {
  let result = null;
  if (!id) {
    result = await model.product.find();
    return result;
  }

  if (ObjectId.isValid(id)) {
    result = await model.product.find(id);
    return result;
  }
  return null;
};

module.exports = find;
