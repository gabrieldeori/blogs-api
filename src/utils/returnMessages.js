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

const tokenNotFound = {
  statusCode: StatusCodes.UNAUTHORIZED,
  error: 'Token not found',
};

const tokenInvalidExpired = {
  statusCode: StatusCodes.UNAUTHORIZED,
  error: 'Expired or invalid token',
};

const userNotExist = {
  statusCode: StatusCodes.NOT_FOUND,
  error: 'User does not exist',
};

module.exports = {
  emailConflict,
  genericLogin,
  internalServerError,
  tokenInvalidExpired,
  tokenNotFound,
  userNotExist,
};
