const { ObjectId } = require('mongodb');
const connection = require('../connection');

const find = async (id) => {
  let result = null;
  
  if (id) {
    result = await (await connection).collection('products').findOne(new ObjectId(id));
  } else {
    result = await (await connection).collection('products').find().toArray();
  }
  return result;
};

module.exports = find;
