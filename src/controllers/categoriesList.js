const { StatusCodes } = require('http-status-codes');
const services = require('../services');
const { internalServerError } = require('../utils/returnMessages');

async function categoriesList(_req, res, nex) {
  try {
    const categories = await services.categoriesList();
    if (categories.error) return nex(categories);
    return res.status(StatusCodes.OK).json(categories);
  } catch (e) {
    console.log(e);
  }
  return nex(internalServerError);
}

module.exports = categoriesList;
