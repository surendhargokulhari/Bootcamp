
const fs = require('fs');
const path = require('path');

const currentDir = __dirname; 


fs.readdir(currentDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err.message);
    return;
  }

  console.log(`Contents of directory: ${currentDir}\n`);

  files.forEach((file) => {
    const filePath = path.join(currentDir, file);
    try {
      const stats = fs.statSync(filePath);
      if (stats.isDirectory()) {
        console.log(`[DIR ] ${file}`);
      } else {
        console.log(`[FILE] ${file}`);
      }
    } catch (statErr) {
      console.error(`Error getting stats for ${file}:`, statErr.message);
    }
  });
});
