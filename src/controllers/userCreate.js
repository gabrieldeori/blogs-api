const { StatusCodes } = require('http-status-codes');
const services = require('../services');
const { tokenOperations } = require('../utils');

function userCreate(req, res, nex) {
  const { displayName, email, password, image } = req.body;
  const user = { displayName, email, password, image };
  
  const validateUser = services.userValidation(user);
  if (validateUser.error) {
    const { statusCode, error } = validateUser;
    nex({ statusCode, message: error });
  }
  // Adicionar usuário ao banco
  // Se der errado retornar nex(erro)

  // Retornar jwt
  const tokenInfos = { userInfos: { email } };
  const newToken = tokenOperations.generate(tokenInfos);
  res.status(StatusCodes.CREATED).json({ token: newToken });
}

module.exports = userCreate;
