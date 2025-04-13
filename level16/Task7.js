

const express = require('express');
const app = express();


const requestLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;

  console.log(`[${timestamp}] ${method} ${url}`);
  next(); 
};


app.use(requestLogger);


app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});

app.get('/contact', (req, res) => {
  res.send('This is the Contact Page.');
});

app.post('/submit', (req, res) => {
  res.send('Form Submitted!');
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
