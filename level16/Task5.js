const express = require('express');
const app = express();
const PORT = 3000;

app.get('/search', (req, res) => {
  const query = req.query.q;
  const limit = req.query.limit || 5; 

  if (!query) {
    return res.status(400).send('Missing search query (q).');
  }

  res.send(`Search for: ${query}, Limit: ${limit}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
