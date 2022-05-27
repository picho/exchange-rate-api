const mongoose = require('mongoose');

const currencySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String
});

module.exports = mongoose.model('Currency', currencySchema);