const fs = require('fs');

const fileToDelete = 'delete_me.txt'; 


if (fs.existsSync(fileToDelete)) {
  fs.unlink(fileToDelete, (err) => {
    if (err) {
      console.error('Error deleting the file:', err.message);
      return;
    }
    console.log(`File "${fileToDelete}" deleted successfully.`);
  });
} else {
  console.log(`File "${fileToDelete}" does not exist.`);
}
