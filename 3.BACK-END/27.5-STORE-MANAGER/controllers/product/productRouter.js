const express = require('express');
const verifyProductQuantity = require('../../middlewares/verifyProductQuantity');
const verifyProductName = require('../../middlewares/verifyProductName');
const create = require('./create');
const find = require('./find');
const findById = require('./findById');

const router = express.Router({ mergeParams: true });

router.post('/', verifyProductQuantity, verifyProductName, create);
router.get('/:id', findById);
router.get('/', find);

module.exports = router;
