const services = require('../services');

async function loginUser(req, res, nex) {
  const { email, password } = req.body;
  const validateLogin = services.validations.loginValidation({ email, password });
  if (validateLogin.error) {
    return nex(validateLogin);
  }
  const loggedUser = await services.login({ email, password });
  if (loggedUser.error) {
    return nex(loggedUser);
  }
  const { statusCode, token } = loggedUser;
  return res.status(statusCode).json({ token });
}

module.exports = loginUser;
