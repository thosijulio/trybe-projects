const verifyProductQuantity = (req, res, next) => {
  const { quantity } = req.body;
  if (!quantity || parseInt(quantity, 10) <= 0) {
    return next({
      status: 422,
      code: 'invalid_data',
      message: '"quantity" must be larger than or equal to 1',
    });
  }
  
  if (typeof quantity !== 'number') {
    return next({
      status: 422,
      code: 'invalid_data',
      message: '"quantity" must be a number',
    });
  }

  return next();
};

module.exports = verifyProductQuantity;
