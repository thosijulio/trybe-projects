const service = require('../../services/index');

const find = async (req, res) => {
  const sales = await service.sale.find();
  res.status(200).json({ sales });
};

module.exports = find;