require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'qualquertokendeteste';

function generate(email) {
  const jwtConfig = {
    algorithm: 'HS256',
  };
  return jwt.sign({ data: email }, secret, jwtConfig);
}

function validate(token) {
  let response = false;
  jwt.verify(token, secret, (err, decoded) => {
    if (err) response = { err };
    else response = { decoded };
  });
  return response;
}

module.exports = {
  generate,
  validate,
};
