const services = require('../services');
const { user } = require('../schemas');

async function userCreate(req, res, nex) {
  const { displayName, email, password, image } = req.body;
  const userData = { displayName, email, password, image };
  const validateUser = services.validation(userData, user);
  if (validateUser.error) {
    return nex(validateUser);
  }
  
  const addedUser = await services.userCreate(userData);
  if (addedUser.error) {
    return nex(addedUser);
  }
  const { statusCode, token } = addedUser;
  return res.status(statusCode).json({ token });
}

module.exports = userCreate;
