const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const router = require(path.resolve('app/routes/router'))

// create application/json parser
const jsonParser = bodyParser.json()
app.use(jsonParser)

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(urlencodedParser)

app.use('/', router)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
