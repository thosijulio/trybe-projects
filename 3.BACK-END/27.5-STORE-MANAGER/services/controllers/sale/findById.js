const service = require('../../services/index');

const findById = async (req, res, next) => {
  const { id } = req.params;

  const sale = await service.sale.find(id);

  if (sale) {
    return res.status(200).json(sale);
  }

  return next({
    status: 404,
    code: 'not_found',
    message: 'Sale not found',
  });
};

module.exports = findById;