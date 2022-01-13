const tokenOp = require('../utils/tokenOperations');
const userGetByEmail = require('./userGetByEmail');

async function findUserWithEmail(token) {
  const { decoded: { data } } = tokenOp.validate(token);
  const dataDecoded = await userGetByEmail(data);
  return dataDecoded;
}

module.exports = findUserWithEmail;
