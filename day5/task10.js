const fs = require('fs');
const path = require('path');

function traverseDirectory(dir) {
    try {
        const files = fs.readdirSync(dir);
        
        files.forEach(file => {
            const fullPath = path.join(dir, file);
            const stats = fs.statSync(fullPath);
            
            if (stats.isDirectory()) {
                console.log(`Directory: ${fullPath}`);
                traverseDirectory(fullPath); // Recursively call for subdirectory
            } else {
                console.log(`File: ${fullPath}`);
            }
        });
    } catch (error) {
        console.error(`Error reading directory ${dir}:`, error.message);
    }
}

function createFile(filename) {
    try {
        fs.writeFileSync(filename, '', 'utf8');
        console.log(`File created: ${filename}`);
    } catch (error) {
        console.error(`Error creating file ${filename}:`, error.message);
    }
}

function deleteFile(filename) {
    try {
        fs.unlinkSync(filename);
        console.log(`File deleted: ${filename}`);
    } catch (error) {
        console.error(`Error deleting file ${filename}:`, error.message);
    }
}

const command = process.argv[2];
const argument = process.argv[3];

switch (command) {
    case 'traverse':
        traverseDirectory(argument || __dirname);
        break;
    case 'create':
        if (argument) {
            createFile(argument);
        } else {
            console.error('Please provide a filename to create.');
        }
        break;
    case 'delete':
        if (argument) {
            deleteFile(argument);
        } else {
            console.error('Please provide a filename to delete.');
        }
        break;
    default:
        console.log('Usage: node task10.js <command> <argument>');
        console.log('Commands:');
        console.log('  traverse <directory> - Recursively lists files and directories');
        console.log('  create <filename> - Creates a new file');
        console.log('  delete <filename> - Deletes a specified file');
        break;
}
