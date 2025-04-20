const Post = require('../myapp/models/Post');
const User = require('../myapp/models/User');

exports.createPost = async (req, res) => {
  try {
    const user = await User.findById(req.body.author);
    if (!user) return res.status(404).json({ error: 'Author not found' });

    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const filter = {};
    if (req.query.author) {
      filter.author = req.query.author;
    }

    const posts = await Post.find(filter).populate('author');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
