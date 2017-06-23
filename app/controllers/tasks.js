const Todolists = require('../models/Todolists')

async function list (req, res, next) {
}

async function create (req, res, next) {
	const id = req.params.id
	const body = req.body

	try {
		let todolist = await Todolists.findById(id)
		todolist.tasks.push(body)
		todolist = await todolist.save()
		return res.status(200).json(todolist)
	} catch (err) {
		console.error(err)
		return res.status(500).json({err: 'some thing error'})
	}
}

async function get (req, res, next) {
}

async function del (req, res, next) {
}

async function update (req, res, next) {
}

module.exports = {
	list,
	create,
	get,
	del,
	update
}
