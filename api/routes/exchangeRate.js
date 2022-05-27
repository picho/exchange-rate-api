const express = require('express');
const router = express.Router();

const exchangeRateControllers = require('../controllers/exchangeRate');

router.get('/:valueToExcenge&:currency', exchangeRateControllers.get_exchangeRate);

module.exports = router;