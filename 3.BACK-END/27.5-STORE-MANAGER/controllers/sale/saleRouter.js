const express = require('express');
const verifySaleQuantity = require('../../middlewares/verifySaleQuantity');
const verifySaleId = require('../../middlewares/verifySaleId');
const create = require('./create');
const find = require('./find');
const findById = require('./findById');

const router = express.Router({ mergeParams: true });

router.post('/', verifySaleQuantity, create);
router.get('/:id', verifySaleId, findById);
router.get('/', find);

module.exports = router;
