const fruits = ["apple", "banana", "mango"];
const vegetables = ["carrot", "beans", "tomato"];

const combinedArray = [...fruits, ...vegetables];


const personalInfo = { name: "Gokul", age: 21 };
const contactInfo = { email: "gokul@example.com", phone: "1234567890" };


const combinedObject = { ...personalInfo, ...contactInfo };


const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
copiedArray.push(4); 

console.log("Combined Array:", combinedArray);
console.log("Combined Object:", combinedObject);
console.log("Original Array:", originalArray);
console.log("Modified Copy:", copiedArray);
