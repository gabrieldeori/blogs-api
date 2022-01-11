const { StatusCodes } = require('http-status-codes');
const { genericLogin, internalServerError } = require('../utils/returnMessages');
const { User } = require('../models');
const { tokenOperations } = require('../utils');

async function login({ email, password }) {
  try {
    console.log('hasUser\n');
    const hasUser = await User.findOne({ where: { email } });
    console.log(hasUser);
    if (!hasUser) return (genericLogin);
    const { password: authenticPassword } = hasUser;
    console.log('AuthenticPassword');
    if (authenticPassword !== password) return (genericLogin);
    const token = tokenOperations.generate(email);
    if (token) return ({ statusCode: StatusCodes.OK, token });
  } catch (e) {
    console.log(e);
  }
  return internalServerError;
}

module.exports = login;
