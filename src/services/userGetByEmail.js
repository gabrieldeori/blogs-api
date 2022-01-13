const { User } = require('../models');

async function userGetByID(emailToFind) {
  const user = await User.findOne({ where: { email: emailToFind } });
  if (user) {
    const { id, displayName, email, image } = user;
    return { id, displayName, email, image };
  }
  return false;
}

module.exports = userGetByID;
