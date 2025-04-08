
const fs = require('fs');
const path = require('path');

function readDirectoryRecursive(dirPath) {
  try {
    const items = fs.readdirSync(dirPath);

    items.forEach((item) => {
      const fullPath = path.join(dirPath, item);
      const stats = fs.statSync(fullPath);

      if (stats.isDirectory()) {
        console.log(`[DIR ] ${fullPath}`);

        readDirectoryRecursive(fullPath);
      } else {
        console.log(`[FILE] ${fullPath}`);
      }
    });
  } catch (err) {
    console.error(`Error reading ${dirPath}:`, err.message);
  }
}

const startPath = path.join(__dirname, 'test_folder'); 

if (fs.existsSync(startPath)) {
  console.log(`\nReading contents of: ${startPath}\n`);
  readDirectoryRecursive(startPath);
} else {
  console.log(`Directory "${startPath}" does not exist. Please create it.`);
}
