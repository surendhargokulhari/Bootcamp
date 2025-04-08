const fs = require('fs');
const path = require('path');


const sourceFilePath = path.join(__dirname, 'largeFile.txt');
const destFilePath = path.join(__dirname, 'copiedFile.txt');


const totalSize = fs.statSync(sourceFilePath).size;

let copiedSize = 0;


const readStream = fs.createReadStream(sourceFilePath);
const writeStream = fs.createWriteStream(destFilePath);

readStream.on('data', (chunk) => {
  copiedSize += chunk.length;
  const progress = ((copiedSize / totalSize) * 100).toFixed(2);
  process.stdout.write(`\rCopy Progress: ${progress}%`);
});

readStream.pipe(writeStream);

readStream.on('error', (err) => {
  console.error('\nError reading file:', err.message);
});

writeStream.on('error', (err) => {
  console.error('\nError writing file:', err.message);
});

writeStream.on('finish', () => {
  console.log('\nFile copy completed successfully!');
});
