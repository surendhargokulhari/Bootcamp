import fs from 'fs';
import path from 'path';

function getFileInfo(filePath) {
    console.log(`Checking file: ${filePath}`); // Debugging line
    if (!fs.existsSync(filePath)) {
        console.log("Error: File does not exist.");
        return;
    }
}

    
    const stats = fs.statSync(filePath);
    
    console.log(`File: ${filePath}`);
    console.log(`Size: ${stats.size} bytes`);
    console.log(`Creation Date: ${new Date(stats.birthtime)}`);
    console.log(`Last Modified Date: ${new Date(stats.mtime)}`);


if (process.argv.length !== 3) {
    console.log("Usage: node script.js <file_path>");
} else {
    getFileInfo(process.argv[2]);
}