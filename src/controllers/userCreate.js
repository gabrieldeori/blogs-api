const services = require('../services');

async function userCreate(req, res, nex) {
  const { displayName, email, password, image } = req.body;
  const validateUser = services.userValidation({ displayName, email, password, image });
  if (validateUser.error) {
    nex(validateUser);
    return null;
  }
  
  const addedUser = await services.userCreate(displayName, email, password, image);
  if (addedUser.error) {
    nex(addedUser);
    return null;
  }
  const { statusCode, token } = addedUser;
  res.status(statusCode).json({ token });
  return null;
}

module.exports = userCreate;
