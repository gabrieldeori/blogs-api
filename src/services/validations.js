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

function userValidation(user) {
  const joiValidation = schemas.user.validate(user);
  if (joiValidation.error) {
    return {
      statusCode: StatusCodes.BAD_REQUEST,
      error: joiValidation.error.details[0].message,
    };
  }
  return user;
}

module.exports = {
  loginValidation,
  userValidation,
};
