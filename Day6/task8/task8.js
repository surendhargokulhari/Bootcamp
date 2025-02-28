const express = require("express");
const app = express();
const port = 3004;


const students = [
    { id: "S101", rollNo: "R001", name: "Alice" },
    { id: "S102", rollNo: "R002", name: "Bob" },
    { id: "S103", rollNo: "R003", name: "Charlie" }
];


app.get("/", (req, res) => {
    const query = req.query.q;
    if (!query) {
        return res.status(400).json({ message: "Query parameter 'q' is required" });
    }

    const searchQuery = query.toLowerCase();
    const results = students.filter(student => 
        student.id.toLowerCase() === searchQuery || student.rollNo.toLowerCase() === searchQuery
    );

    res.json(results.length > 0 ? results : { message: "No students found" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
