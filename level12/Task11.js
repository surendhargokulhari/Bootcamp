
const fs = require('fs');

const fileToWatch = 'watched.txt'; 


if (!fs.existsSync(fileToWatch)) {
  console.log(`File "${fileToWatch}" does not exist. Please create it first.`);
  process.exit(1);
}

console.log(`Watching for changes on "${fileToWatch}"...\n`);

fs.watch(fileToWatch, (eventType, filename) => {
  if (filename) {
    console.log(`File "${filename}" was ${eventType}`);
  } else {
    console.log(`A change was detected, but filename is not available.`);
  }
});
