const models = require('../models');

async function postCreate(data) {
  const createdPost = await models.Post.create(data);
  return createdPost;
}

module.exports = postCreate;