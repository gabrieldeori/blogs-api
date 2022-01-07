const express = require('express');

const router = express.Router();

function pingPong(_req, res) {
  res.status(200).json({ message: 'Pong' });
}

router.get('/', pingPong);

module.exports = router;
