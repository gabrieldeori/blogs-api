const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const emailConflict = {
  statusCode: StatusCodes.CONFLICT,
  error: 'User already registered',
};
const genericLogin = {
  statusCode: StatusCodes.BAD_REQUEST,
  error: 'Invalid fields',
};
const internalServerError = {
  statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
  error: ReasonPhrases.INTERNAL_SERVER_ERROR,
};

module.exports = {
  emailConflict,
  genericLogin,
  internalServerError,
};
