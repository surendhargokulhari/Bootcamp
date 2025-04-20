const express = require('express');
const router = express.Router();
const { getUserPosts } = require('../controllers/userController');

// GET /api/users/:id/posts
router.get('/:id/posts', getUserPosts);

module.exports = router;
