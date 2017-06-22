module.exports = {
	get (req, res) {
		const params  = req.params
		const query = req.query
		return res.status(200).json({query, params})
	}
}
