const User = require('../models/User');
const Post = require('../models/Post');

exports.getUserPosts = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const posts = await Post.find({ author: user._id }).populate('author', 'name email');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
