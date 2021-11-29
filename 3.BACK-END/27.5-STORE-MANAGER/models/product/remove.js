const { ObjectId } = require('mongodb');
const connection = require('../connection');

const remove = async (id) => {
  const result = await (await connection).collection('products').findOneAndDelete({
    _id: ObjectId(id),
  });
  return result;
};

module.exports = remove;
