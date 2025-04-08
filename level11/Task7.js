
let favoriteFoods = ["Pizza", "Biriyani", "Burger", "Sushi", "Pasta"];

favoriteFoods.push("Ice Cream");

favoriteFoods.shift();

let arrayLength = favoriteFoods.length;

let indexOfSushi = favoriteFoods.indexOf("Sushi");


let slicedFoods = favoriteFoods.slice(1, 3);

console.log("Original (Modified) Array:", favoriteFoods);
console.log("Array Length:", arrayLength);
console.log("Index of 'Sushi':", indexOfSushi);
console.log("Sliced Array (index 1 to 3):", slicedFoods);
