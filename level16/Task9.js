const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send(`
    <h2>Contact Form</h2>
    <form action="/submit" method="POST">
      <label>Name:</label><br />
      <input type="text" name="name" /><br /><br />
      <label>Email:</label><br />
      <input type="email" name="email" /><br /><br />
      <label>Message:</label><br />
      <textarea name="message"></textarea><br /><br />
      <button type="submit">Submit</button>
    </form>
  `);
});


app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;

 
  if (!name || !email || !message) {
    return res.status(400).send(`
      <h3 style="color:red;">Error: All fields are required.</h3>
      <a href="/">Go back</a>
    `);
  }

  
  res.send(`
    <h2>Form Submitted Successfully!</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
    <a href="/">Submit another response</a>
  `);
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
