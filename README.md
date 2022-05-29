# exchange-rate-api

## Installation

Use the following steps to make work this app.

1. Clone this repository or download it.
2. Put the app in a folder.
3. Using a terminal o cmd, go to the folder.
4. Being in the folder, write npm install and press enter, wait until all the packages are installed
5. Once the installation is finished, write npm start and press enter.

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

This api has two routes and you should you the http protocal to call their endpoints. the rountes are **exchangeRate** and **currency**

### exchangeRate

This route only has one endpoint, it has to be call with the http protocol get, passing two values, a number (price value that is going to change applying a rate value) and a string (the string represents a currency that has a rate that is going to change a price).

### currency

This route only has one endpoint, it has to be call with the http protocol get, this endpoint is going to call repository that has all the currency avialable in this project.


