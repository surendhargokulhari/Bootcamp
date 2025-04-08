
const person = {
    name: "Gokul",
    age: 22,
    city: "Coimbatore",
    hobbies: ["cricket", "music", "gym"]
  };
  
  
  console.log("Name:", person.name);
  console.log("Age:", person.age);
  console.log("City:", person.city);
  console.log("Hobbies:", person.hobbies.join(", "));
  

  person.job = "Frontend Developer";
  

  person.age = 23;
  
  
  person.greet = function () {
    return `Hello, my name is ${this.name}!`;
  };
  
  
  console.log(person.greet());
  
  console.log("Updated Person Object:", person);
  