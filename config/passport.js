const LocalStrategy = require('passport-local').Strategy

const path = require('path')
const auth = require(path.resolve('app/controllers/auth'))

module.exports = function (passport) {
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, auth.localSignup
  ))

  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, auth.localLogin
  ))
} // end module
