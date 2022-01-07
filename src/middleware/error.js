function error(err, _req, res, _nex) {
  const { statusCode, message } = err;
  res.status(statusCode).json({ message });
}

module.exports = error;
