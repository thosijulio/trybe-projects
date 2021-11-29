const service = require('../../services/index');

const remove = async (req, res, next) => {
  const { id } = req.params;
  const result = await service.product.remove(id);
  if (result) {
    return res.status(200).json(result);
  }
  return next({
    status: 422,
    code: 'invalid_data',
    message: 'Wrong id format',
  });
};

module.exports = remove;
