const express = require('express');
const verifyProductQuantity = require('../../middlewares/verifyProductQuantity');
const verifyProductName = require('../../middlewares/verifyProductName');
const create = require('../../models/product/create');

const router = express.Router({ mergeParams: true });

router.post('/', verifyProductQuantity, verifyProductName, (req, res) => {
  const product = req.body;
  const result = create(product);
  console.log(result);
  res.status(200).end();
});

module.exports = router;
