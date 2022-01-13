async function postCreate(content) {
  return { id: 1, ...content };
}

module.exports = postCreate;