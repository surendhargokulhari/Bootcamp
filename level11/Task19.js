
function factorial(n) {
    
    if (n < 0) {
      throw new Error("Factorial is not defined for negative numbers");
    }

    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  const testInputs = [5, 3, 0, 1, -2];
  
  testInputs.forEach(num => {
    try {
      const result = factorial(num);
      console.log(`Factorial of ${num} is: ${result}`);
    } catch (error) {
      console.log(`Error for input ${num}: ${error.message}`);
    }
  });
  