const process = require('process');

function multiplicationTable(n) {
    console.log(`Multiplication Table of ${n}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x ${n} = ${n * i}`);
    }
}

if (process.argv.length !== 3) {
    console.log("Usage: node script.js <number>");
} else {
    const num = parseInt(process.argv[2], 10);
    if (!isNaN(num)) {
        multiplicationTable(num);
    } else {
        console.log("Please enter a valid number.");
    }
}
