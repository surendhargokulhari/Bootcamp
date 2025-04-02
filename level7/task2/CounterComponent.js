import React from 'react';
import useCounter from '../useCounter';

const CounterComponent = () => {
    const { count, increment, decrement, reset } = useCounter(0);

    return (
        <div className="p-4 text-center">
            <h1 className="text-2xl mb-4">Counter: {count}</h1>
            <div className="space-x-4">
                <button 
                    onClick={increment} 
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 bg-secondary m-2 rounded"
                >
                    Increment
                </button>
                <button 
                    onClick={decrement} 
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 bg-info m-2 rounded"
                >
                    Decrement
                </button>
                <button 
                    onClick={reset} 
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 bg-success m-2 rounded"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default CounterComponent;
