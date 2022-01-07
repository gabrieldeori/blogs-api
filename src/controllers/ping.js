function ping(_req, res) {
  res.status(200).json({ message: 'Pong' });
}

module.exports = ping;
