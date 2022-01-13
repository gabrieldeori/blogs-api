const services = require('../services');
const schemas = require('../schemas');

function createPost(req, res, nex) {
  const { title, content, categoryIds } = req.body;
  const postContent = { title, content, categoryIds };
  const validatePostContent = services.validation(postContent, schemas.post);
  if (validatePostContent.error) return nex(validatePostContent);
  return res.json({ message: 'hello by controller', validatePostContent });
}

module.exports = createPost;
