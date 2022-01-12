const { StatusCodes } = require('http-status-codes');
const schemas = require('../schemas');

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

module.exports = userValidation;
