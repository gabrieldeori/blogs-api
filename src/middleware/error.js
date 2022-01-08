function error(err, _req, res, _nex) {
  const { statusCode, message } = err;
  res.status(statusCode).json({ message });
  return null;
}

module.exports = error;
