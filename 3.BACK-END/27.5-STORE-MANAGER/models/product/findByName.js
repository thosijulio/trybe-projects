const connection = require('../connection');

const findByName = async (name) => {
  const result = await (await connection()).collection('products').findOne({ name });
  return result;
};

module.exports = findByName;
