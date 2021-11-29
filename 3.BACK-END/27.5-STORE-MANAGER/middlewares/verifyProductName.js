const verifyProductName = (req, res, next) => {
  const { name } = req.body;
  if (!name || name.length < 5) {
    return next({
      status: 422,
      code: 'invalid_data',
      message: '"name" length must be at least 5 characters long',
    });
  }
  return next();
};

module.exports = verifyProductName;
