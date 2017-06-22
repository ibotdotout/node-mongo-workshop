const express = require('express')
const app = express()
const path = require('path')
const router = require(path.resolve('app/routes/router'))

app.use('/', router)

const cb0 = function (req, res, next) {
    console.log('CB0')
    next()
}

const cb1 = function (req, res, next) {
    console.log('CB1')
    next()
}

const cb2 = function (req, res) {
    res.send('Hello from C!')
}

app.get('/middlewares', [cb0, cb1, cb2])

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
