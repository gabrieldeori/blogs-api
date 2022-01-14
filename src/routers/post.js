const express = require('express');
const controllers = require('../controllers');
const { validateToken } = require('../middleware');

const router = express.Router();

router.get('/', validateToken, controllers.getAllPosts);
router.post('/', validateToken, controllers.createPost);

module.exports = router;
