import React, { useState, useEffect } from 'react';

const App = () => {
    const [data, setData] = useState(null);

   
    const fetchData = (callback) => {
        setTimeout(() => {
            const mockData = [
                { id: 1, name: 'Ragul' },
                { id: 2, name: 'Gokul' },
                { id: 3, name: 'Aathi K7' }
            ];
            callback(mockData); 
        }, 2000);
    };

    const handleData = (fetchedData) => {
        setData(fetchedData);
    };

   
    useEffect(() => {
        fetchData(handleData);
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Data Fetching Example</h1>
            {data ? (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
};

export default App;
