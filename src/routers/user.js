const express = require('express');
const controllers = require('../controllers');
const { validateToken } = require('../middleware');

const router = express.Router();

router.post('/', controllers.userCreate);
router.get('/', validateToken, controllers.userGetAll);

module.exports = router;
