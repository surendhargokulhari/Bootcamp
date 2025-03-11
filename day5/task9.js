const fs = require('fs');
const path = require('path');

const command = process.argv[2];
const filename = process.argv[3];

switch (command) {
    case 'create':
        if (!filename) {
            console.error("Error: Filename is required for 'create' command.");
            process.exit(1);
        }
        fs.writeFileSync(filename, '', 'utf8');
        console.log(`File '${filename}' created successfully.`);
        break;
    
    case 'delete':
        if (!filename) {
            console.error("Error: Filename is required for 'delete' command.");
            process.exit(1);
        }
        if (fs.existsSync(filename)) {
            fs.unlinkSync(filename);
            console.log(`File '${filename}' deleted successfully.`);
        } else {
            console.error(`Error: File '${filename}' does not exist.`);
        }
        break;
    
    case 'list':
        const files = fs.readdirSync(path.resolve('.'));
        if (files.length) {
            console.log("Files in the current directory:");
            files.forEach(file => console.log(file));
        } else {
            console.log("No files found in the current directory.");
        }
        break;
    
    default:
        console.error("Invalid command. Use 'node task9.js create <filename>', 'node task9.js delete <filename>', or 'node task9.js list'.");
}
