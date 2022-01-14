const services = require('../services');
const schemas = require('../schemas');

async function createPost(req, res, nex) {
  const { authorization } = req.headers;
  const { title, content, categoryIds } = req.body;
  const validPost = services.validation({ title, content, categoryIds }, schemas.post);
  if (validPost.error) return nex(validPost);
  const { id: userId } = await services.findUserWithToken(authorization);
  const createdPost = await services.postCreate({ userId, title, content });
  return res.json(createdPost);
}

module.exports = createPost;
