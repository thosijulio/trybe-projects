const connection = require('../connection');

const create = async (product) => {
  const result = await (await connection).collection('products').insertOne(product);
  return result.ops;
};

module.exports = create;
