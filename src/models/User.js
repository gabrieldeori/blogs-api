module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    displayName: DataTypes.string,
    email: DataTypes.string,
    password: DataTypes.string,
    image: DataTypes.string,
  });
  return User;
};
