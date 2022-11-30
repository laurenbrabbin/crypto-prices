# Real-time Crypto Prices using NestJS and Angular
This application is a client/server that provides a real time price stream for the following coins [BTC,ETH,XRP,LTC,BCH,ETC] and their value in the following currencies [USD,GBP,EUR,JPY,ZAR]. CryptoCompare's api was used as the data source.

Technologies used:
 * Server: NestJS
 * Client: Angular
 * Typescipt



## Features

1. **Displays the price of BTC, ETH, XRP, LTC, BCH, and ETC coins in USD, GBP, EUR, JPY, and ZAR.**  
   Represented as a table with crypto coins along the top currencies along the side.
2. **Price refreshes every 10 seconds**
   Price will update every 10 seconds without refreshing the page.
3. **Displays a small line chart for each coin/currency pair displaying the price history for the past 24 hours.**  
   Used Chart.js to create the line charts.


## Seed Project Setup

```shell
; cd 02_nestjs               # For the backend
; npm install -g @nestjs/cli # Install the NestJS CLI
; npm install                # Install dependencies
; code .env                  # Add the API key according to instructions
; npm run test               # Run unit tests
; npm run test:e2e           # Run end-to-end integration tests
; npm run start
# Server will start, to verify visit http://localhost:3000/price?from=BTC&to=USD
```

```shell
# In a new terminal
; cd 03_angular               # For the frontend
; npm install -g @angular/cli # Install the Angular CLI
; npm install                 # Install dependencies
; npm run test                # Run the tests (in Chrome)
; npm run start
# Server will start, to verify visit http://localhost:4200/
```

