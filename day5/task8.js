const fs = require('fs');
const path = require('path');

function traverseDirectory(dir) {
    try {
        const files = fs.readdirSync(dir);
        
        files.forEach(file => {
            const fullPath = path.join(dir, file);
            const stats = fs.statSync(fullPath);
            
            if (stats.isDirectory()) {
                console.log(`Directory: ${fullPath}`);
                traverseDirectory(fullPath); // Recursively call for subdirectory
            } else {
                console.log(`File: ${fullPath}`);
            }
        });
    } catch (error) {
        console.error(`Error reading directory ${dir}:`, error.message);
    }
}

const startDirectory = process.argv[2] || __dirname; // Get directory from command line or use current directory
console.log(`Starting traversal from: ${startDirectory}`);
traverseDirectory(startDirectory);
