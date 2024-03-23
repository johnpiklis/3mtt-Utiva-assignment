const express = require ('express')
const app = express()

app.get ('/', (reg, res) => res.send('My 3mtt Assignment from by Lafteef'))
app.listen (6000, () => console.log('server ready'))