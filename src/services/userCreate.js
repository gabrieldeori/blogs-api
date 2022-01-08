const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const { User } = require('../models');
const { tokenOperations } = require('../utils');

async function userCreate(displayName, email, password, image) {
  try {
    const addUser = await User.create({ displayName, email, password, image });
    if (!addUser) {
      return ({
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        error: ReasonPhrases.INTERNAL_SERVER_ERROR,
      });
    }
    const token = tokenOperations.generate(email);
    return ({ statusCode: StatusCodes.CREATED, token });
  } catch (e) {
    console.log(e);
  }
  return ({
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    error: ReasonPhrases.INTERNAL_SERVER_ERROR,
  });
}

module.exports = userCreate;
