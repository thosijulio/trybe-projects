const { ObjectId } = require('mongodb');
const connection = require('../connection');

const remove = async (id) => {
  const { value } = await (await connection()).collection('sales').findOneAndDelete({
    _id: ObjectId(id),
  });
  return value;
};

module.exports = remove;