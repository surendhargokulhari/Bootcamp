import React, { useRef } from 'react';

const FocusInput = () => {
  // Create a ref to the input element
  const inputRef = useRef(null);

  // Function to focus the input element when called
  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-4 bg-gray-100">
      <h1 className="text-2xl font-bold">Focus Input Example</h1>

      <input
        ref={inputRef}  // Attach ref to the input element
        type="text"
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
        placeholder="Click the button to focus"
      />
      
      <button
        onClick={handleFocus}  // Trigger focus on button click
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 bg-primary"
      >
        Focus Input
      </button>
    </div>
  );
};

export default FocusInput;
