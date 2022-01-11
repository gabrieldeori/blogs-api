const errorHandler = (err, _req, res, _nex) => {
  if (err.error) {
    const { statusCode, error } = err;
    res.status(statusCode).json({ message: error });
    return null;
  }
  const { statusCode, message } = err;  
  res.status(statusCode).json({ message });
  return null;
};

module.exports = errorHandler;
