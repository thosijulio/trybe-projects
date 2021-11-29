const service = require('../../services');

const create = async (req, res, next) => {
  const product = req.body;
  const result = await service.product.create(product);
  if (!result) {
    return next({
    status: 422,
    code: 'invalid_data',
    message: 'Product already exists',
  });
}
  res.status(201).json(result);
};

module.exports = create;
