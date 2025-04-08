
const fs = require('fs');

const source = 'source.txt';
const destination = 'copied.txt';

if (fs.existsSync(destination)) {
  console.log(`Destination file "${destination}" already exists. Copy aborted.`);
} else {
  fs.copyFile(source, destination, (err) => {
    if (err) {
      console.error('Error copying file:', err.message);
      return;
    }
    console.log(`File copied successfully from "${source}" to "${destination}"`);
  });
}
