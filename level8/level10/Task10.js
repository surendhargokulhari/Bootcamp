import React, { useState } from 'react';
import useAxios from './UseAxios';

const App = () => {
    const [forceRefresh, setForceRefresh] = useState(false);
    const { data, loading, error, refresh } = useAxios(
        'https://jsonplaceholder.typicode.com/posts', 
        {}, 
        forceRefresh
    );

    const handleRefresh = () => {
        refresh();
        setForceRefresh(!forceRefresh); 
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Custom Axios Hook with Caching</h1>
            <button onClick={handleRefresh} style={{ marginBottom: '20px' }}>
                Force Refresh Data
            </button>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {data && (
                <ul>
                    {data.slice(0, 5).map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default App;
