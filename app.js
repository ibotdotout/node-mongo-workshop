const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const router = require(path.resolve('app/routes/router'))
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const passport = require('passport')
require('./config/passport')(passport)

const NODE_ENV = process.env.NODE_ENV || 'development'

// create application/json parser
const jsonParser = bodyParser.json()
app.use(jsonParser)

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(urlencodedParser)

// passport middleware
app.use(passport.initialize())

app.use('/', router)

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message || err })
})

if (NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost/node_workshop');

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })
}

module.exports = app
