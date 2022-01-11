const express = require('express');
const controllers = require('../controllers');
const { validateToken } = require('../middleware');

const router = express.Router();

router.post('/', controllers.userCreate);
router.get('/', validateToken, controllers.userGetAll);
router.get('/:id', validateToken, controllers.userGetByID);

module.exports = router;
