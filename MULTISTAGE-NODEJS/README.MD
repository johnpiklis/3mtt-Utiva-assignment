# HOW TO CREATE A MULTISTAGE NODEJS

FROM node:14

WORKDIR /usr/src/app

COPY package*.json app.js ./

RUN npm install

EXPOSE 6000

CMD ["node", "app.js"]



# NODEJS CODE

const express = require ('express')

const app = express()

app.get ('/', (reg, res) => res.send('My 3mtt Assignment from by Lafteef'))

app.listen (6000, () => console.log('server ready'))