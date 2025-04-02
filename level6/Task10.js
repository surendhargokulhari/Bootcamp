import React, { useState, useCallback } from 'react';

// Child Component that receives a memoized callback as a prop
const ChildComponent = React.memo(({ handleClick }) => {
  console.log('Child Component Rendered');
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Click Me (Child)
      </button>
    </div>
  );
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Memoizing the callback to prevent unnecessary re-renders of ChildComponent
  const memoizedHandleClick = useCallback(() => {
    console.log('Button clicked in child');
  }, []); // Empty dependency array ensures the function is only created once

  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-4 bg-gray-100">
      <h1 className="text-2xl font-bold">Parent Component</h1>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 bg-primary"
      >
        Increment Count (Parent)
      </button>
      <ChildComponent handleClick={memoizedHandleClick} />
    </div>
  );
};

export default ParentComponent;
