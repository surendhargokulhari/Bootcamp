import React, { useReducer } from 'react';

// Initial state of the counter
const initialState = { count: 0 };

// Reducer function to handle state changes
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error('Invalid action type');
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-4 bg-gray-100">
      <h1 className="text-2xl font-bold">Counter: {state.count}</h1>
      <div className="space-x-4">
        <button
          onClick={() => dispatch({ type: 'increment' })}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 bg-success"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: 'decrement' })}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 bg-danger"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: 'reset' })}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 bg-warning"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
