const services = require('../services');
const schemas = require('../schemas');
const { internalServerError } = require('../utils/returnMessages');

async function createPost(req, res, nex) {
  try {
    const { authorization } = req.headers;
    const { title, content, categoryIds } = req.body;
    const validPost = services.validation({ title, content, categoryIds }, schemas.post);
    if (validPost.error) return nex(validPost);
    const createdPost = await services.postCreate(authorization, { title, content });
    return res.json(createdPost);
  } catch (e) {
    console.log(e);
  }
  return nex(internalServerError);
}

module.exports = createPost;
