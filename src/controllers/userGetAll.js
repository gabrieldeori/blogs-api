const { StatusCodes } = require('http-status-codes');
const services = require('../services');
const { internalServerError } = require('../utils/returnMessages');

async function userGetAll(_req, res, nex) {
  try {
    const users = await services.userGetAll();
    if (users) return res.status(StatusCodes.OK).json(users);
  } catch (e) {
    console.log(e);
  }
  nex(internalServerError);
}

module.exports = userGetAll;
