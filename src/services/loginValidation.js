const { StatusCodes } = require('http-status-codes');
const schemas = require('../schemas');

function loginValidation(user) {
  const joiValidation = schemas.login.validate(user);
  if (joiValidation.error) {
    return {
      statusCode: StatusCodes.BAD_REQUEST,
      error: joiValidation.error.details[0].message,
    };
  }
  return user;
}

module.exports = loginValidation;