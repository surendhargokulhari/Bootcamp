const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./t7routes/userRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api', userRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
