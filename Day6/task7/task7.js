const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res, next) => next(new Error("Sample error")));


app.use((req, res) => res.status(404).json({ error: { code: 404, message: "Resource not found" } }));


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: { code: 500, message: "Internal Server Error" } });
});

app.listen(3002, () => console.log("Server running on port 3000"));
