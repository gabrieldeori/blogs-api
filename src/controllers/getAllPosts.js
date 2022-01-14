const { StatusCodes } = require('http-status-codes');
const { postsGetAll } = require('../services');
const { internalServerError } = require('../utils/returnMessages');

async function getAllPosts(_req, res, nex) {
  try {
    const allPosts = await postsGetAll();
    if (!allPosts) nex(internalServerError);
    return res.status(StatusCodes.OK).json(allPosts);
  } catch (e) {
    console.log(e);
  }
  return nex(internalServerError);
}

module.exports = getAllPosts;