const User = require('../models/User')

async function list (req, res, next) {
	let result
	try {
		result = await User.find()

		if (result) {
			return res.status(200).json(result)
		} else {
			return res.status(404).json([])
		}
	} catch (err) {
		console.error(err)
		return res.status(500).json({err: 'some thing error'})
	}
}

async function create (req, res, next) {
	const body = req.body

	try {
		let user = new User(body)
		user = await user.save()
		return res.status(201).json(user)
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
