const express = require('express');
const router = express.Router();
const { createPost, getAllPosts } = require('../controllers/postController');

// POST /api/posts
router.post('/', createPost);

// GET /api/posts?author=xyz
router.get('/', getAllPosts);

module.exports = router;
