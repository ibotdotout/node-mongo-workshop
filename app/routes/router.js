const express = require('express')
const expressJwt = require('express-jwt')
const passport = require('passport')
const router = express.Router()

const jwt = require('../controllers/jwt')
const basic = require('../controllers/basic')
const middleware = require('../controllers/middleware')
const bodyparser = require('../controllers/bodyparser')
const queryParams = require('../controllers/query-params')
const users = require('../controllers/users')
const todolists = require('../controllers/todolists')
const tasks = require('../controllers/tasks')

// TODO: change it
const secretKey = 'node-jwt-secert-testing'
const authenticate = expressJwt({ secret: secretKey, credentialsRequired: true })

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
  .post(authenticate, todolists.create)

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

router.post('/auth/signup',
  passport.authenticate('local-signup', {session: false}),
  jwt.generateToken(secretKey),
  jwt.respondToken)

router.post('/auth/login',
  passport.authenticate('local-login', {session: false}),
  jwt.generateToken(secretKey),
  jwt.respondToken)

module.exports = router
