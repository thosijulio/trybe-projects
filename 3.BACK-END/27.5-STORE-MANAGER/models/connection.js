const { MongoClient } = require('mongodb');

require('dotenv').config();

const connection = async () => {
  const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/StoreManager`;
  const DB_NAME = 'StoreManager';
  const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  return MongoClient.connect(MONGO_DB_URL, OPTIONS).then((conn) => conn.db(DB_NAME));
};

module.exports = connection;
