
const args = process.argv.slice(2);

if(args.length !== 2){
    console.log("usage: node script.js <nums1> <num2>");
    process.exit(1);
}

const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);

if(isNaN(num1) || isNaN(num2)){
    console.log("please provide two valid numbers.");
    process.exit(1);
}
const sum = num1+num2;
console.log(`the sum of ${num1} and ${num2} is: ${sum}`);