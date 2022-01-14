module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    name: DataTypes.STRING,
    content: DataTypes.STRING,
    title: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
  }, { timestamps: false });
  
  Post.associate = (models) => {
    Post.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };
  
  return Post;
};
