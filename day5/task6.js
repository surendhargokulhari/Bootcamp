import fs from 'fs';
import path from 'path';

function getFileInfo(filePath) {
    if (!fs.existsSync(filePath)) {
        console.log("Error: File does not exist.");
        return;
    }
    
    const stats = fs.statSync(filePath);
    
    console.log(`File: ${filePath}`);
    console.log(`Size: ${stats.size} bytes`);
    console.log(`Creation Date: ${new Date(stats.birthtime)}`);
    console.log(`Last Modified Date: ${new Date(stats.mtime)}`);
}

function filterUsersByAge(users, ageThreshold) {
    return users.filter(user => user.age > ageThreshold);
}

if (process.argv.length !== 3) {
    console.log("Usage: node script.js <file_path>");

    getFileInfo(process.argv[2]);
    
    const users = [
        { name: "Alice", age: 30 },
        { name: "Bob", age: 20 },
        { name: "Charlie", age: 35 },
        { name: "David", age: 25 }
    ];
    
    const filteredUsers = filterUsersByAge(users, 25);
    console.log("Filtered Users:", filteredUsers);
}
