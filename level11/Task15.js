
function divideNumbers(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
  

  const testCases = [
    { a: 10, b: 2 },
    { a: 15, b: 3 },
    { a: 20, b: 0 }, 
    { a: 5, b: 1 }
  ];
  
  testCases.forEach(({ a, b }) => {
    try {
      const result = divideNumbers(a, b);
      console.log(`Result of ${a} / ${b} = ${result}`);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    } finally {
      console.log("Finished one division attempt.\n");
    }
  });
  