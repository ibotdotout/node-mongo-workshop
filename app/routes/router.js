const express = require('express')
const router = express.Router()

const basic = require('../controllers/basic')
const middleware = require('../controllers/middleware')

router.route('/')
  .get(basic.get)
  .post(basic.post)

router.route('/user')
  .put(basic.put)
  .delete(basic.del)

router.route('/middleware')
  .get(middleware)

module.exports = router
