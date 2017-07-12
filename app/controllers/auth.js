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
      user = new User()
      const hashPassword = user.generateHash(password)
      user.email = email
      user.password = hashPassword
      user = await user.save()
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

    if (!user || !user.validPassword(password)) { // valid is sync
      user = null
      err = new Error()
      err.name = 'UnauthorizedError'
      err.message = 'user not found or invalid user'
      err.status = 401

      console.log(`${email} - ${err.message}`)
      return next(err)
    }

    return next(null, user)
  } catch (err) {
    return next(err)
  }
}

module.exports = {
  localLogin,
  localSignup
}
