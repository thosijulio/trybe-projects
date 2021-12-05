const express = require('express');
const productRouter = require('./product/productRouter');
const saleRouter = require('./sale/saleRouter');

const router = express.Router({ mergeParams: true });

router.use('/products', productRouter);
router.use('/sales', saleRouter);

module.exports = router;
