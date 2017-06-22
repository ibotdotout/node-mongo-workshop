const express = require('express')
const router = express.Router()

const basic = require('../controllers/basic')
const middleware = require('../controllers/middleware')
const bodyparser = require('../controllers/bodyparser')
const queryParams = require('../controllers/query-params')

router.route('/')
  .get(basic.get)
  .post(basic.post)

router.route('/user')
  .put(basic.put)
  .delete(basic.del)

router.route('/middleware')
  .get(middleware)

router.route('/body')
  .post(bodyparser)

router.route('/items/:id')
  .get(queryParams.get)

module.exports = router
