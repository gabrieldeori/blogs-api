const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const { User } = require('../models');
const { tokenOperations } = require('../utils');

async function userCreate(displayName, email, password, image) {
  try {
    const addUser = await User.create({ displayName, email, password, image });
    const token = tokenOperations.generate({ displayName, email, password, image });
    console.log(addUser);
    return { statusCode: StatusCodes.CREATED, token };
  } catch (e) {
    console.log(e);
  }
  return ({
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    error: ReasonPhrases.INTERNAL_SERVER_ERROR,
  });
}

module.exports = userCreate;
