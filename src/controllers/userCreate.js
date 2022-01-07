const services = require('../services');

function userCreate(req, res) {
  const { displayName, email, password, image } = req.body;
  services.userCreate();
  res.status(200).json({ displayName, email, password, image });
}

module.exports = userCreate;
