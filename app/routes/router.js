const express = require('express')
const router = express.Router()

const basic = require('../controllers/basic')
const middleware = require('../controllers/middleware')
const bodyparser = require('../controllers/bodyparser')
const queryParams = require('../controllers/query-params')
const users = require('../controllers/users')
const todolists = require('../controllers/todolists')
const tasks = require('../controllers/tasks')

router.route('/')
  .get(basic.get)
  .post(basic.post)

router.route('/users')
  .get(users.list)
  .post(users.create)

router.route('/users/:id')
  .get(users.get)
  .put(users.update)
  .delete(users.del)

router.route('/todolists')
  .get(todolists.list)
  .post(todolists.create)

router.route('/todolists/:id')
  .get(todolists.get)
  .put(todolists.update)
  .post(todolists.del)

router.route('/todolists')
  .get(todolists.list)
  .post(todolists.create)

router.route('/todolists/:id')
  .get(todolists.get)
  .put(todolists.update)
  .post(todolists.del)

router.route('/todolists/:id/tasks')
  .post(tasks.create)
  .put(tasks.update)
  .delete(tasks.del)

router.route('/middleware')
  .get(middleware)

router.route('/body')
  .post(bodyparser)

router.route('/items/:id')
  .get(queryParams.get)

router.route('/health')
  .get((req, res) => res.json({ok: true}))

module.exports = router
