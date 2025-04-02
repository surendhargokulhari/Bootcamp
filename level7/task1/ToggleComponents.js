import React from 'react';
import useToggle from './UseToggle';

const ToggleComponent = () => {
    const [isVisible, toggleVisibility] = useToggle(false);

    return (
        <div className="p-4">
            <button 
                onClick={toggleVisibility} 
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-4 bg-primary rounded"
            >
                {isVisible ? 'Hide Content' : 'Show Content'}
            </button>
            
            {isVisible && (
                <div className="p-4 mt-4 bg-gray-100 rounded-lg shadow-lg">
                    <p>This is the content that appears and disappears!</p>
                </div>
            )}
        </div>
    );
}

export default ToggleComponent;
