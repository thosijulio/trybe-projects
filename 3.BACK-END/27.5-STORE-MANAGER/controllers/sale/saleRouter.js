const express = require('express');
const verifySaleQuantity = require('../../middlewares/verifySaleQuantity');
const create = require('./create');

const router = express.Router({ mergeParams: true });

router.post('/', verifySaleQuantity, create);

module.exports = router;
