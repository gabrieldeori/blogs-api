function categoryCreate(req, res) {
  const { name } = req.body;

  return res.json({ message: 'Showww', name });
}

module.exports = categoryCreate;
