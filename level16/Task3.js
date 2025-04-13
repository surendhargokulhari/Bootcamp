
const express = require('express');


const app = express();


app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Gokul', email: 'gokul@example.com' },
    { id: 2, name: 'Priya', email: 'priya@example.com' },
    { id: 3, name: 'Rahul', email: 'rahul@example.com' }
  ];

  res.json(users);
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
