module.exports = (sequelize, _DataTypes) => {
  const PostnnCategories = sequelize.define('PostnnCategories',
  {},
  { timestamps: false });

  PostnnCategories.associate = (models) => {
    models.Post.belongsToMany(models.Category, {
      as: 'categories',
      throug: PostnnCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.Post, {
      as: 'posts',
      through: PostnnCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostnnCategories;
};
