const { ObjectId } = require('mongodb');
const connection = require('../connection');

const update = async (id, sale) => {
  const { value } = await (await connection).collection('sales').findOneAndUpdate(
    {
      _id: ObjectId(id),
    },
    {
      $set: {
        itensSold: sale,
      },
    },
    {
      returnDocument: 'after',
    },
  );
  return value;
};

module.exports = update;
