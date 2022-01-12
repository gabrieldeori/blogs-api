const services = require('../services');
const { login } = require('../schemas');

async function loginUser(req, res, nex) {
  const { email, password } = req.body;
  const userData = { email, password };
  const validateLogin = services.validation(userData, login);
  if (validateLogin.error) {
    return nex(validateLogin);
  }
  const loggedUser = await services.login(userData);
  if (loggedUser.error) {
    return nex(loggedUser);
  }
  const { statusCode, token } = loggedUser;
  return res.status(statusCode).json({ token });
}

module.exports = loginUser;
