module.exports = (err, _req, res, _nex) => {
  if (err.error) {
    const { statusCode, error } = err;  
    res.status(statusCode).json({ error });
    return null;
  }
  const { statusCode, message } = err;  
  res.status(statusCode).json({ message });
  return null;
};
