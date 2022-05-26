const axios = require("axios");

module.exports = class exchangeRate {

    constructor (valueToExchenge, currency) {
      this.valueToExchenge = valueToExchenge;
      this.currency = currency
    }

    // Método
    async callExchangerValue () {

        // const options = {
        //     method: 'GET',
        //     url: process.env.URL_EXCHANGE_ENDPOINT,
        //     params: {to: 'USD', from: this.currency, amount: this.valueToExchenge},
        //     headers: {
        //       'apikey': process.env.API_KEY_EXCHANGE_ENDPOINT
        //     }
        //   };

          const config = {
            headers: { 'apikey': process.env.API_KEY_EXCHANGE_ENDPOINT },
            params: {
              to: 'USD', 
              from: this.currency, 
              amount: this.valueToExchenge
            }
          }

          return await axios.get(process.env.URL_EXCHANGE_ENDPOINT, config);
          
          
          // axios.request(options).then(function (response) {
          //     console.log(response.data);
          // }).catch(function (error) {
          //     console.error(error);
          // });
    }
}


  

