const service = require('../../services');

const create = async (req, res, next) => {
  const sales = req.body;
  const insertedSale = await service.sale.create(sales);
  
  if (insertedSale) return res.status(200).json(insertedSale);
  return next({
    status: 404,
    code: 'stock_problem',
    message: 'Such amount is not permitted to sell',
  });
};

module.exports = create;
