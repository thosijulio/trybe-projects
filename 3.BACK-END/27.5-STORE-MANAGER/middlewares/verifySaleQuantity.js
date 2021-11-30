const verifySaleQuantity = (req, res, next) => {
  const sales = req.body;

  return sales.forEach((sale) => {
    if (!sale.quantity || (sale.quantity).length <= 0 || typeof (sale.quantity) === 'string') {
      return next({
        status: 422,
        code: 'invalid_data',
        message: 'Wrong product ID or invalid quantity',
      });
    }
    return next();
  });
};

module.exports = verifySaleQuantity;
