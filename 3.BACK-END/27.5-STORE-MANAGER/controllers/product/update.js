const service = require('../../services/index');

const update = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  const result = await service.product.update(product, id);
  res.status(200).json(result);
};

module.exports = update;
