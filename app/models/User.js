const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: { type: String, require: false},
  email: { type: String, required: true},
  password: { type: String, required: true},
  isActive: { type: Boolean, default: true }
},{
  timestamps: true
})

UserSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

const User = mongoose.model('User', UserSchema)

module.exports = User
