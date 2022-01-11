const { User } = require('../models');

async function userGetByID(idToFind) {
  const user = await User.findByPk(idToFind);
  if (user) {
    const { id, displayName, email, image } = user;
    return { id, displayName, email, image };
  }
  return false;
}

module.exports = userGetByID;