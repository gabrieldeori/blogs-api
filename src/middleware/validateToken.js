const { tokenNotFound, tokenInvalidExpired } = require('../utils/returnMessages');
const { tokenOperations } = require('../utils');

function validateToken(req, _res, nex) {
  const { authorization } = req.headers;
  if (!authorization) return nex(tokenNotFound);
  const validToken = tokenOperations.validate(authorization);
  if (validToken.decoded) return nex();
  return nex(tokenInvalidExpired);
}

module.exports = validateToken;
