const express = require('express');
const router = express.Router();

const currencyControllers = require('../controllers/currency');

router.get('/', currencyControllers.get_all_currencies);

module.exports = router;