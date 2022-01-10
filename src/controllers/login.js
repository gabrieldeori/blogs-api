const services = require('../services');

async function loginUser(req, res, nex) {
  const { email, password } = req.body;
  const validateLogin = services.loginValidation({ email, password });
  if (validateLogin.error) {
    nex(validateLogin);
    return null;
  }
  const loggedUser = await services.login({ email, password });
  if (loggedUser.error) {
    nex(loggedUser);
    return null;
  }
  const { statusCode, token } = loggedUser;
  res.status(statusCode).json({ token });
  return null;
}

module.exports = loginUser;
