require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'qualquertokendeteste';

function generate(email) {
  const jwtConfig = {
    algorithm: 'HS256',
  };
  return jwt.sign({ data: email }, secret, jwtConfig);
}

module.exports = {
  generate,
};
