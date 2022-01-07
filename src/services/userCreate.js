const { StatusCodes } = require('http-status-codes');
const { tokenOperations } = require('../utils');

function userCreate(user) {
  tokenOperations.generate(user);
  return {
    statusCode: StatusCodes.CREATED,
    responseMessage: { token: 'TOKENNNNXXaksjflkajsf' },
  };
}

module.exports = userCreate;
