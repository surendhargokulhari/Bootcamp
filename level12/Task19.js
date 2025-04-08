const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const inputFile = path.join(__dirname, 'sample.txt');
const compressedFile = path.join(__dirname, 'sample.txt.gz');
const decompressedFile = path.join(__dirname, 'sample_decompressed.txt');


function compressFile(input, output, callback) {
  const inputStream = fs.createReadStream(input);
  const outputStream = fs.createWriteStream(output);
  const gzip = zlib.createGzip();

  inputStream
    .pipe(gzip)
    .pipe(outputStream)
    .on('finish', () => {
      console.log('✅ File compressed to', output);
      callback();
    })
    .on('error', (err) => console.error('❌ Compression Error:', err.message));
}


function decompressFile(input, output, callback) {
  const inputStream = fs.createReadStream(input);
  const outputStream = fs.createWriteStream(output);
  const gunzip = zlib.createGunzip();

  inputStream
    .pipe(gunzip)
    .pipe(outputStream)
    .on('finish', () => {
      console.log('✅ File decompressed to', output);
      callback();
    })
    .on('error', (err) => console.error('❌ Decompression Error:', err.message));
}

function verifyContent(original, decompressed) {
  const originalData = fs.readFileSync(original, 'utf8');
  const decompressedData = fs.readFileSync(decompressed, 'utf8');

  if (originalData === decompressedData) {
    console.log('✅ Verification passed: Content matches!');
  } else {
    console.error('❌ Verification failed: Content does not match!');
  }
}


compressFile(inputFile, compressedFile, () => {
  decompressFile(compressedFile, decompressedFile, () => {
    verifyContent(inputFile, decompressedFile);
  });
});
