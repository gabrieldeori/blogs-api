const { StatusCodes } = require('http-status-codes');
const services = require('../services');
const { internalServerError, userNotExist } = require('../utils/returnMessages');

async function userGetByID(req, res, nex) {
  try {
    const { id } = req.params;
    const user = await services.userGetByID(id);
    if (user) return res.status(StatusCodes.OK).json(user);
    return nex(userNotExist);
  } catch (e) {
    console.log(e);
  }
  nex(internalServerError);
}

module.exports = userGetByID;
