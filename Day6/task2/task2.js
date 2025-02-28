const express = require('express');
const app = express();
const port = 3000;

const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "gokul" }
];

app.get('/', (req, res) => {
    res.json(users);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
