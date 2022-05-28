const axios = require("axios");

module.exports = class exchangeRate {

    constructor (valueToExchenge, currency) {
      this.valueToExchenge = valueToExchenge;
      this.currency = currency
    }

    // Método
    async callExchangerValue () {

      const config = {
        headers: { 'apikey': process.env.API_KEY_EXCHANGE_ENDPOINT },
        params: {
          to: this.currency, 
          from: "EUR", 
          amount: this.valueToExchenge
        }
      }

      return await axios.get(process.env.URL_EXCHANGE_ENDPOINT, config);
    }
}


  

