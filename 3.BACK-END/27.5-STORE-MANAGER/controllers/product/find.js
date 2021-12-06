const service = require('../../services');

const find = async (req, res) => {
  const result = await service.product.find();
  return res.status(200).json({ products: result });
};

module.exports = find;
