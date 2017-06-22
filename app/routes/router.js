const express = require('express')
const router = express.Router()

const basic = require('../controllers/basic')

router.route('/')
  .get(basic.get)
  .post(basic.post)

router.route('/user')
  .put(basic.put)
  .delete(basic.del)

module.exports = router
