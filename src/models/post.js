module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    name: DataTypes.STRING,
    content: DataTypes.STRING,
  }, { timestamps: false });
  return Post;
};
