const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
  name: { type: String, require: true },
  isDone: { type: Boolean, default: false }
})

const TodolistSchema = new Schema({
  name: { type: String, require: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User', require: true },
  tasks: [TaskSchema]
},{
  timestamps: true
})

const Todolist = mongoose.model('Todolist', TodolistSchema)

module.exports = Todolist
