import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isError, setIsError] = useState(false);

  const handleNumberClick = (number) => {
    if (isError) {
      setInput(number);
      setOutput('');
      setIsError(false);
    } else {
      setInput(input + number);
    }
  };

  const handleOperatorClick = (operator) => {
    if (isError) return;
    setInput(input + operator);
  };

  const handleClearClick = () => {
    setInput('');
    setOutput('');
    setIsError(false);
  };

  const handleDeleteClick = () => {
    setInput(input.slice(0, -1));
  };

  const handleEqualsClick = () => {
    try {
      // Use eval() to evaluate the input expression
      const result = eval(input);  // Warning: eval should be used cautiously in production
      setOutput(result);
      setInput(result.toString());
    } catch (e) {
      setIsError(true);
      setOutput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className={`input ${isError ? 'error' : ''}`}>{input || '0'}</div>
        {output && <div className="output">{output}</div>}
      </div>
      <div className="buttons">
        <button className="clear" onClick={handleClearClick}>C</button>
        <button className="delete" onClick={handleDeleteClick}>←</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>

        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>

        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>

        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleEqualsClick()}>=</button>

        <button onClick={() => handleNumberClick('0')} className="zero">0</button>
        <button onClick={() => handleNumberClick('.')}>.</button>
      </div>
    </div>
  );
};

export default Calculator;
