exports.get_exchangeRate = (req, res, next) => {

    const valueToExcenge = req.params.valueToExcenge;

    res.status(200).json(valueToExcenge);   
}
