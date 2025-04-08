const fs = require('fs');

const content = 'hello i have to became mern stack developer';

fs.writeFile('output.txt', content, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err.message);
    return;
  }
  console.log('File written successfully!');
});
