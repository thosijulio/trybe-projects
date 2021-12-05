const service = require('../../services');

const update = async (req, res, _next) => {
  const { id } = req.params;
  const sale = req.body;
  const updatedSale = await service.sale.update(id, sale);
  res.status(200).json(updatedSale);
};

module.exports = update;
