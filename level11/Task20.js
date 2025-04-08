
function operateOnArray(arr, operation) {
    return arr.map(operation);
  }
  
  function double(num) {
    return num * 2;
  }
  
  function square(num) {
    return num * num;
  }
  
  function toString(num) {
    return num.toString();
  }

  const numbers = [1, 2, 3, 4, 5];

  const doubled = operateOnArray(numbers, double);
  const squared = operateOnArray(numbers, square);
  const stringified = operateOnArray(numbers, toString);
  
  console.log("Original Array:", numbers);
  console.log("Doubled Array:", doubled);
  console.log("Squared Array:", squared);
  console.log("Stringified Array:", stringified);
  