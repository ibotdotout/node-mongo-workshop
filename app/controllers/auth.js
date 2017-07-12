// use in config/passport.js

const path = require('path')
const User = require(path.resolve('app/models/User'))

async function localSignup (req, email, password, next) {
  let user
  try {
    user = await User.findOne({'email': email})
  } catch (err) {
    return next(err)
  }

  if (user) {
    const err = new Error()
    err.name = 'UnauthorizedError'
    err.message = 'user existed'
    err.status = 401

    console.log(`${email} - ${err.message}`)

    return next(err) // user existed
  } else { // new user
    try {
      user = await new User({email, password}).save()
      return next(null, user)
    } catch (err) {
      return next(err)
    }
  }
}

async function localLogin (req, email, password, next) {
  let user
  let err

  try {
    user = await User.findOne({ 'email': email })
  } catch (err) {
    return next(err)
  }

  if (!user || user.password !== password) {
    user = null
    err = new Error()
    err.name = 'UnauthorizedError'
    err.message = 'user not found or invalid user'
    err.status = 401

    console.log(`${email} - ${err.message}`)
    return next(err)
  }

  return next(null, user)
}

module.exports = {
  localLogin,
  localSignup
}
