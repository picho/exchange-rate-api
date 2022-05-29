# exchange-rate-api

This back-end app is meant to cover all the required functionalities described in ArcelorMittal's case study. Its focus is to provide a way to apply an exchange rate to a given value.

## Installation

Use the following steps to make this app work.

1. Clone this repository or download it.
2. Put the app in a folder.
3. Using a terminal or cmd, go to the folder.
4. Once in the folder, write ```npm install``` and press enter. Wait until all the packages are installed.
5. Once the installation is finished, write ```npm start``` and press enter.

When the app is running, if everything is ok, you should see the following message.

```
exchange-rate-api@1.0.0 start
> nodemon server.js

[nodemon] 2.0.16
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
Listening on port 3050...
database connection success
```

## Components

This API has two routes and you should use the http protocols to call their endpoints. The rountes are **exchangeRate** and **currency**.

### exchangeRate

This route only has one endpoint. It has to be called with the http protocol ```get```, sending two values, a number (price value that is going to change with the exchange rate value) and a string (which represents a currency that has a corresponding rate that is going to change the price).

### currency

This route only has one endpoint, it has to be called with the http protocol ```get```. This endpoint is going to call the repository that has all the available currencies.


