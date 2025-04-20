
const express = require('express');
const app = express();
const userRoutes = require('./routes/users');  // Correct path to users.js


app.use(express.json());


app.use('/users', userRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
