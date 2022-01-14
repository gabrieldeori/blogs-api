const { BlogPost, User, Category } = require('../models');

async function postsGetAll() {
  const allPosts = await BlogPost.findAll({
    include: [
      { model: User,
        as: 'user',
        attributes: { exclude: ['password'] } },
      { model: Category,
        as: 'categories',
        through: { attributes: [] } },
    ],
  });
  return allPosts;
}

module.exports = postsGetAll;