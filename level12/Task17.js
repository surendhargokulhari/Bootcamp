const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);


const inputPath = path.join(__dirname, 'secret.txt');
const encryptedPath = path.join(__dirname, 'encrypted.txt');
const decryptedPath = path.join(__dirname, 'decrypted.txt');

function encryptFile(input, output, callback) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  const inputStream = fs.createReadStream(input);
  const outputStream = fs.createWriteStream(output);

  inputStream
    .pipe(cipher)
    .pipe(outputStream)
    .on('finish', () => {
      console.log('✅ File encrypted and saved to encrypted.txt');
      callback();
    })
    .on('error', (err) => console.error('❌ Encryption Error:', err.message));
}


function decryptFile(input, output, callback) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  const inputStream = fs.createReadStream(input);
  const outputStream = fs.createWriteStream(output);

  inputStream
    .pipe(decipher)
    .pipe(outputStream)
    .on('finish', () => {
      console.log('✅ File decrypted and saved to decrypted.txt');
      callback();
    })
    .on('error', (err) => console.error('❌ Decryption Error:', err.message));
}


function verifyOriginal(original, decrypted) {
  const originalData = fs.readFileSync(original, 'utf8');
  const decryptedData = fs.readFileSync(decrypted, 'utf8');
  if (originalData === decryptedData) {
    console.log('✅ Verification passed: Decrypted content matches original!');
  } else {
    console.error('❌ Verification failed: Content mismatch!');
  }
}


encryptFile(inputPath, encryptedPath, () => {
  decryptFile(encryptedPath, decryptedPath, () => {
    verifyOriginal(inputPath, decryptedPath);
  });
});
