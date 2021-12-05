const connection = require('../connection');

const create = async (sales) => {
  const { ops } = await (await connection).collection('sales').insertOne({ itensSold: sales });
  return ops[0];
};

module.exports = create;
