const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const userRoutes = require('./task6/routes/userRoutes');
const postRoutes = require('./task6/routes/postRoutes');

app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/populate_demo')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
