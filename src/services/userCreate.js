const { StatusCodes } = require('http-status-codes');
const { internalServerError, emailConflict } = require('../utils/returnMessages');
const { User } = require('../models');
const { tokenOperations } = require('../utils');

async function userCreate(displayName, email, password, image) {
  try {
    const hasUser = await User.findOne({ where: { email } });
    if (hasUser) return (emailConflict);
    const addUser = await User.create({ displayName, email, password, image });
    if (!addUser) return (internalServerError);
    const token = tokenOperations.generate(email);
    if (token) return ({ statusCode: StatusCodes.CREATED, token });
  } catch (e) {
    console.log(e);
  }
  return (internalServerError);
}

module.exports = userCreate;
