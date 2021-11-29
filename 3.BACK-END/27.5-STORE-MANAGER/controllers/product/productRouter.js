const express = require('express');
const verifyProductQuantity = require('../../middlewares/verifyProductQuantity');
const verifyProductName = require('../../middlewares/verifyProductName');
const create = require('./create');

const router = express.Router({ mergeParams: true });

router.post('/', verifyProductQuantity, verifyProductName, create);

module.exports = router;
