const express = require('express');
const controllers = require('../controllers');
const { error } = require('../middleware');

const router = express.Router();

router.post('/', controllers.userCreate, error);

module.exports = router;
