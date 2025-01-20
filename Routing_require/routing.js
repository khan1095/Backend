const express = require('express')
const main = require('./routes/main')
const shop=require('./routes/shop')
const app = express()
const port = 3000

app.use('/shop',shop)

app.use('/main', main)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})