// Get the command-line arguments
const args = process.argv.slice(2);

if (args.length !== 1) {
    console.log("Usage: node script.js <string>");
    process.exit(1);
}

const inputString = args[0];

// Function to reverse the string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Print the reversed string
console.log(reverseString(inputString));
