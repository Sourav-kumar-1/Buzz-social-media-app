const jwt = require('jsonwebtoken')

const refreshToken = (payload) => {
  return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '7d' })
}
module.exports = refreshToken