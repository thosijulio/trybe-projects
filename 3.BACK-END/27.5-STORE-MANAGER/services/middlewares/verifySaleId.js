const { ObjectId } = require('mongodb');

const verifyId = (req, _res, next) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) {
    return next({
      status: 404,
      code: 'not_found',
      message: 'Sale not found',
    });
  }
  next();
};

module.exports = verifyId;
