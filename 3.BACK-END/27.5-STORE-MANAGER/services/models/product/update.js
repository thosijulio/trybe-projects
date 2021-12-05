const { ObjectId } = require('mongodb');
const connection = require('../connection');

const update = async (id, product) => {
  const { value } = await (await connection).collection('products').findOneAndUpdate(
    {
      _id: ObjectId(id),
    },
    {
      $set: {
        name: product.name,
        quantity: product.quantity,
      },
    },
    {
      returnDocument: 'after',
    },
  );
  return value;
};

module.exports = update;
