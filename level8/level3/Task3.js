import React, { useState, useEffect } from 'react';

const App = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchDataPromise = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const mockData = [
                    { id: 1, name: 'Alice' },
                    { id: 2, name: 'Bob' },
                    { id: 3, name: 'Charlie' }
                ];

                const success = true; 

                if (success) {
                    resolve(mockData);
                } else {
                    reject("Failed to fetch data.");
                }
            }, 2000);
        });
    };

    
    const fetchDataAsync = async () => {
        try {
            const fetchedData = await fetchDataPromise(); 
            console.log('✅ Data fetched successfully:', fetchedData);
            setData(fetchedData);
        } catch (err) {
            console.error('❌ Error:', err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDataAsync();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Async/Await Data Fetching Example</h1>
            {loading && <p>Loading data...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {data && (
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default App;
