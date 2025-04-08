const fs = require('fs');
const path = 'sample.txt';

fs.stat(path, (err, stats) => {
  if (err) {
    console.error(`Error retrieving stats for "${path}":`, err.message);
    return;
  }

  console.log(`File Stats for "${path}":`);
  console.log(`Size: ${stats.size} bytes`);
  console.log(`Created: ${stats.birthtime.toLocaleString()}`);
  console.log(`Last Modified: ${stats.mtime.toLocaleString()}`);
});
