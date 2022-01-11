const errorHandler = (err, _req, res, _nex) => {
  if (err.error) {
    const { statusCode, error } = err;
    return res.status(statusCode).json({ message: error });
  }
  const { statusCode, message } = err;  
  return res.status(statusCode).json({ message });
};

module.exports = errorHandler;
