const express = require('express');

const router = express.Router();

function userManipulation(req, res) {
  const { displayName, email, password, image } = req.body;
  res.status(200).json({ displayName, email, password, image });
}

router.post('/', userManipulation);

module.exports = router;
