const schemas = require('../schemas');

function validateUser(user) {
  const userValidation = schemas.user.validate(user);
  if (userValidation.error) {
    return userValidation.error;
  }
}

function userCreate(user) {
  return validateUser(user);
}

module.exports = userCreate;
