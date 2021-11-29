const express = require('express');
const productRouter = require('./product/productRouter');

const router = express.Router({ mergeParams: true });

router.use('/products', productRouter);

module.exports = router;
