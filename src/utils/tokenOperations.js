require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'qualquertokendeteste';

function generate(user) {
  const jwtConfig = {
    algorithm: 'HS256',
  };
  return jwt.sign({ data: user }, secret, jwtConfig);
}

module.exports = {
  generate,
};
