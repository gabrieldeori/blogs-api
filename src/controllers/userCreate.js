const services = require('../services');

function userCreate(req, res, nex) {
  const { displayName, email, password, image } = req.body;
  const validateUser = services.userValidation({ displayName, email, password, image });
  if (validateUser.error) {
    nex(validateUser);
  }
  const addedUser = services.userCreate({ displayName, email, password, image });
  if (addedUser.error) {
    nex(addedUser);
  }
  const { statusCode, token } = addedUser;
  res.status(statusCode).json({ token });
  return null;
}

module.exports = userCreate;
