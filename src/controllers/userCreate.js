const services = require('../services');

function userCreate(req, res) {
  const { displayName, email, password, image } = req.body;
  const user = { displayName, email, password, image };
  const responseOfService = services.userCreate(user);
  res.status(200).json(responseOfService);
}

module.exports = userCreate;
