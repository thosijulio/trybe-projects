const service = require('../../services');

const remove = async (req, res, next) => {
  const { id } = req.params;

  const removedSale = await service.sale.remove(id);

  if (removedSale) {
    return res.status(200).json(removedSale);
  }
  return next({
    status: 422,
    code: 'invalid_data',
    message: 'Wrong sale ID format',
  });
};

module.exports = remove;
