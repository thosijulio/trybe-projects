const findProduct = require('../../services/product/find');

const findById = async (req, res, next) => {
  const { id } = req.params;
  const result = await findProduct(id);

  if (!result) {
    return next({
      status: 422,
      code: 'invalid_data',
      message: 'Wrong id format',
    });
  }

  return res.status(200).json(result);
};

module.exports = findById;
