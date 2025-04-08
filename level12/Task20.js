const fs = require('fs');
const path = require('path');

const dirToWatch = './watched'; 
const logFile = 'fsWatcher.log';

const debounceMap = new Map();


function getTimestamp() {
  return new Date().toISOString();
}


function logChange(type, filename) {
  const message = `[${getTimestamp()}] ${type}: ${filename}`;
  console.log(message);

  fs.appendFile(logFile, message + '\n', (err) => {
    if (err) console.error('Error writing to log file:', err);
  });
}

function watchDirectory(dir) {
  try {
    fs.watch(dir, { recursive: false }, (eventType, filename) => {
      if (!filename) return;

      const filePath = path.join(dir, filename);

      // Debounce logic
      if (debounceMap.has(filePath)) clearTimeout(debounceMap.get(filePath));

      debounceMap.set(filePath, setTimeout(() => {
        fs.stat(filePath, (err, stats) => {
          if (err) {
            if (err.code === 'ENOENT') {
              logChange('Deleted', filePath);
            } else {
              console.error(`Error accessing file ${filePath}:`, err);
            }
            return;
          }

          if (stats.isDirectory()) {
            watchDirectory(filePath); 
            logChange('Directory Added', filePath);
          } else {
            if (eventType === 'rename') {
              logChange('Created', filePath);
            } else if (eventType === 'change') {
              logChange('Modified', filePath);
            }
          }
        });
      }, 100));
    });


    fs.readdir(dir, { withFileTypes: true }, (err, files) => {
      if (err) return console.error(`Error reading directory ${dir}:`, err);

      files.forEach((file) => {
        if (file.isDirectory()) {
          watchDirectory(path.join(dir, file.name));
        }
      });
    });

    console.log(`Watching directory: ${dir}`);
  } catch (err) {
    console.error(`Failed to watch directory ${dir}:`, err.message);
  }
}


if (!fs.existsSync(dirToWatch)) {
  console.error(`Directory "${dirToWatch}" does not exist.`);
  process.exit(1);
}

watchDirectory(dirToWatch);
