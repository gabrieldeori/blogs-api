const { StatusCodes } = require('http-status-codes');
const models = require('../models');
const findUserWithToken = require('./findUserWithToken');
const categoriesList = require('./categoriesList');

function checkCategories(categoryIds, categoryList) {
  const listIds = categoryList.map(({ id }) => id);
  return categoryIds.every((id) => listIds.includes(id));
}

const categoryIdsNotFound = {
  error: '"categoryIds" not found',
  statusCode: StatusCodes.BAD_REQUEST,
};

async function postCreate(authorization, { title, content, categoryIds }) {
  const categoryList = await categoriesList();
  const compatibleArray = checkCategories(categoryIds, categoryList);
  if (!compatibleArray) return categoryIdsNotFound;
  const { id: userId } = await findUserWithToken(authorization);
  const createdPost = await models.BlogPost.create({
    title, content, userId, published: new Date(), updated: new Date() });
  return createdPost;
}

module.exports = postCreate;