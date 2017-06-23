const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, required: false},
  isActive: { type: Boolean, default: true }
},{
  timestamps: true
})

const User = mongoose.model('User', UserSchema)

module.exports = User
