const express = require('express');
const controllers = require('../controllers');
const { validateToken } = require('../middleware');

const router = express.Router();

router.get('/', validateToken, controllers.categoriesList);
router.post('/', validateToken, controllers.categoryCreate);

module.exports = router;
