const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodolistSchema = new Schema({
  name: { type: String, require: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User', require: true }
},{
  timestamps: true
})

const Todolist = mongoose.model('Todolist', TodolistSchema)

module.exports = Todolist
