const { ObjectId } = require('mongodb');

const verifySaleDeleteId = (req, res, next) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) {
    return next({
      status: 422,
      code: 'invalid_data',
      message: 'Wrong sale ID format',
    });
  }
  next();
};

module.exports = verifySaleDeleteId;
