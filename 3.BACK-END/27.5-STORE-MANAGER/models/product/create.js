const connection = require('../connection');

const create = async (product) => {
  const { result: ops } = await (await connection).collection('products').insertOne(product);
  console.log(result.ops);
  return result;
};

module.exports = create;
