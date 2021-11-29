const express = require('express');
const verifyProductQuantity = require('../../middlewares/verifyProductQuantity');
const verifyProductName = require('../../middlewares/verifyProductName');
const create = require('./create');
const find = require('./find');
const findById = require('./findById');
const update = require('./update');
const verifyId = require('../../middlewares/verifyId');
const remove = require('./remove');

const router = express.Router({ mergeParams: true });

router.post('/', verifyProductQuantity, verifyProductName, create);
router.get('/:id', verifyId, findById);
router.get('/', find);
router.put('/:id', verifyId, verifyProductName, verifyProductQuantity, update);
router.delete('/:id', verifyId, remove);

module.exports = router;
