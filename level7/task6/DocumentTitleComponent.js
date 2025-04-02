import React, { useState } from 'react';
import useDocumentTitle from './useDocumentTitle';

const DocumentTitleComponent = () => {
    const [count, setCount] = useState(0);

    useDocumentTitle(`Count: ${count}`);

    return (
        <div className="p-4 text-center">
            <h1 className="mb-4">Count: {count}</h1>
            <button 
                onClick={() => setCount(count + 1)} 
                className="btn btn-primary"
            >
                Increment Count
            </button>
        </div>
    );
};

export default DocumentTitleComponent;
