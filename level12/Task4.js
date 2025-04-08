
const fs = require('fs'); 

const fileName = 'test.txt'; 


if (fs.existsSync(fileName)) {
  console.log(`${fileName} exists.`);
} else {
  console.log(`${fileName} does NOT exist.`);
}
