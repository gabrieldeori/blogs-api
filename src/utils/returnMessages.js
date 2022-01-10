const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const internalServerError = {
  statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
  error: ReasonPhrases.INTERNAL_SERVER_ERROR,
};

const emailConflict = {
  statusCode: StatusCodes.CONFLICT,
  error: 'User already registered',
};

module.exports = {
  internalServerError,
  emailConflict,
};
