const findProduct = require('../../services/product/find');

const find = async (req, res) => {
  const result = await findProduct();
  return res.status(200).json({ products: result });
};

module.exports = find;
