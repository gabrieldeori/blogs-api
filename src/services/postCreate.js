const models = require('../models');
const findUserWithToken = require('./findUserWithToken');

async function postCreate(authorization, { title, content }) {
  const { id: userId } = await findUserWithToken(authorization);
  const createdPost = await models.Post.create({ title, content, userId });
  return createdPost;
}

module.exports = postCreate;