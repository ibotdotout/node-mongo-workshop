const express = require('express')
const app = express()
const path = require('path')
const router = require(path.resolve('app/routes/router'))

app.use('/', router)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
