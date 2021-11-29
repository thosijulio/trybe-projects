const connection = require('../connection');

const find = async (name) => {
  let result = null;
  
  if (!name) {
    result = await (await connection).collection('product').find().toArray();
  } else {
    result = await (await connection).collection('product').findOne({ name });
  }
  return result;
};

module.exports = find;
