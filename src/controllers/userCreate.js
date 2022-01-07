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
}

module.exports = userCreate;
