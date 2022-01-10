const services = require('../services');

async function loginUser(req, res, nex) {
  const { email, password } = req.body;
  const validateLogin = services.loginValidation({ email, password });
  if (validateLogin.error) {
    console.log('Existe chave error');
    const { statusCode, error } = validateLogin;
    nex(validateLogin); // Não funciona
    // nex({ statusCode, error }); // Não funciona
    // nex({ validateLogin }); // não funciona obviamente
    // nex(statusCode, error); // não funciona obviamente
    // res.status(statusCode).json({ error }); // função nex decidiu não funcionar. Indeterminado.
    // funciona em userCreate
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
