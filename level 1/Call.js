import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  return (
    <div className="box" style={{textAlign:"center",marginTop:"50px"}}>
        <h1>Calculate the Ground Price</h1>

        <input
        type="number"
        placeholder="Enter first Number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
        />

        <input
        type="number"
        placeholder="Enter second Number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
        />
        

    <h2>Result:</h2>
    <p>Sum:<strong>{num1+num2}</strong></p>
    <p>Multilication<strong>{num1*num2}</strong></p>
    <p>Division<strong>{num1/num2}</strong></p>
    </div>
      );
    }
    export default App;
  