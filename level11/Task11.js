
const numbers = [1,2,3,4,5,6,7,8,9,10];

const squaredNumbers = numbers.map(num => num * num);

const oddNumbers = numbers.filter(num => num % 2 !== 0);

const totalSum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log("Square roots:");
numbers.forEach(num => {
  console.log(`Number: ${num}, Square root: ${Math.sqrt(num).toFixed(2)}`);
});

console.log("\nOriginal Numbers:", numbers);
console.log("Squared Numbers:", squaredNumbers);
console.log("Odd Numbers:", oddNumbers);
console.log("Sum of Numbers:", totalSum);
