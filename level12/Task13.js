
const fs = require('fs');
const path = require('path');
const os = require('os');


const tmpBase = path.join(os.tmpdir(), 'myapp-');

fs.mkdtemp(tmpBase, (err, tempDir) => {
  if (err) {
    console.error('Error creating temp directory:', err.message);
    return;
  }

  console.log(`Temporary directory created: ${tempDir}\n`);

 
  const fileCount = 3; 
  for (let i = 1; i <= fileCount; i++) {
    const filePath = path.join(tempDir, `tempfile${i}.txt`);
    const content = `This is temp file number ${i}`;

    try {
      fs.writeFileSync(filePath, content);
      console.log(`Created: ${filePath}`);
    } catch (writeErr) {
      console.error(`Error writing to ${filePath}:`, writeErr.message);
    }
  }
});
