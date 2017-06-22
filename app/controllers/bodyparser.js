module.exports = (req, res) => {
	const body = req.body
	const isEmpty = Object.keys(body).length > 0

	if (isEmpty) {
		return res.status(200).json( body)
	} else {
		return res.sendStatus(400)
	}
}
