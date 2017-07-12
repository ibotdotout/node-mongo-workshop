const jwt = require('jsonwebtoken')
const path = require('path')

const configJwt = {
  type: 'bearer',
  expire_in: 15 * 60 * 1000,
  access_token_expire: '15 mins'
}

function generateToken (key) {
  return function (req, res, next) {
    const user = req.user
    req.accessToken = generateAccessToken(key, user)
    next()
  }
}

function generateAccessToken (key, user) {
  const payload = { sub: user.id, email: user.email }
  const options = { expiresIn: configJwt.access_token_expire }

  return jwt.sign(payload, key, options)
}

function respondToken (req, res) {
  res.status(200).json({
    success: true,
    token: {
      access: req.accessToken,
      expire_in: configJwt.expire_in,
      type: configJwt.type
    }
  })
}

module.exports = {
  generateToken,
  respondToken
}
