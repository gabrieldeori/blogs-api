const { StatusCodes } = require('http-status-codes');
const schemas = require('../schemas');

function loginValidation({ email, password }) {
  const joiValidation = schemas.login.validate({ email, password });
  if (joiValidation.error) {
    return {
      statusCode: StatusCodes.BAD_REQUEST,
      error: joiValidation.error.details[0].message,
    };
  }
  return ({ email, password });
}

module.exports = loginValidation;