const verifySaleQuantity = (req, res, next) => {
  const sales = req.body;

  const isQuantityValid = !sales.some((sale) => {
    if (!sale.quantity || sale.quantity <= 0 || typeof (sale.quantity) === 'string') {
      return true;
    }
    return false;
  });
  if (isQuantityValid) {
    return next();
  }
  
  return next({
    status: 422,
    code: 'invalid_data',
    message: 'Wrong product ID or invalid quantity',
  });
};

module.exports = verifySaleQuantity;
