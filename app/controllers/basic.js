function get (req, res) {
  res.send('Hello World!')
}

const post = function (req, res) {
  res.send('Got a POST request')
}

const put = (req, res) => {
  res.send('Got a PUT request at /user')
}

const del = function (req, res) {
  res.send('Got a DELETE request at /user')
}

module.exports = {
  get,
  post,
  put,
  del
}
