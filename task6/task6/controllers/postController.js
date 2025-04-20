const Post = require('../models/Post');
const User = require('../models/User');

exports.createPost = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const user = await User.findById(author);
    if (!user) return res.status(404).json({ error: 'Author not found' });

    const post = await Post.create({ title, content, author });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const filter = req.query.author ? { author: req.query.author } : {};
    const posts = await Post.find(filter).populate('author', 'name email');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
