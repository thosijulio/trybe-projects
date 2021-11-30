const service = require('../../services');

const create = async (req, res) => {
  const sales = req.body;
  const insertedSale = await service.sale.create(sales);
  res.status(200).json(insertedSale);
};

module.exports = create;
