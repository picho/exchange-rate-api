const express = require('express');
const router = express.Router();

const pricesControllers = require('../controllers/exchangeRate');


router.get('/:valueToExcenge&:currency', pricesControllers.get_exchangeRate);


module.exports = router;