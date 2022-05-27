const mongoose = require('mongoose');

const Currency = require('../models/currency');

exports.get_all_currencies = async (req, res, next) => {

    Currency.find()
    .then((prices) => {
        res.status(200).json(prices);
    })
    .catch(() => {
        res.status(500).json({message: 'error retrieving the prices'});
    });
}
