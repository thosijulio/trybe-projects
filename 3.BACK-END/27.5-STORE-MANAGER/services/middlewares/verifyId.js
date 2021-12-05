const { ObjectId } = require('mongodb');

const verifyId = (req, _res, next) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) {
    return next({
      status: 422,
      code: 'invalid_data',
      message: 'Wrong id format',
    });
  }
  next();
};

module.exports = verifyId;
