const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const internalServerError = {
  statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
  error: ReasonPhrases.INTERNAL_SERVER_ERROR,
};

const emailConflict = {
  statusCode: StatusCodes.CONFLICT,
  error: 'User already registered',
};

const genericLogin = {
  statusCode: StatusCodes.BAD_REQUEST,
  message: 'Invalid fields',
};

module.exports = {
  emailConflict,
  genericLogin,
  internalServerError,
};
