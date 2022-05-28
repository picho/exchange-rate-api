const ExchangeRate = require('../models/exchangeRate');

exports.get_exchangeRate = async (req, res, next) => {

    console.log("req.params");
    console.log(req.params);

    const exchangeRate = new ExchangeRate(req.params.valueToExcenge,req.params.currency);

    const {data} = await exchangeRate.callExchangerValue();

    res.status(200).json(data);   
}
