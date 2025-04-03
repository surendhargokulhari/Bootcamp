import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CancelableFetcher = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const source = axios.CancelToken.source(); 

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    cancelToken: source.token 
                });
                setData(response.data);
            } catch (err) {
                if (axios.isCancel(err)) {
                    console.log('Request canceled:', err.message); 
                } else {
                    setError('Failed to fetch data');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            source.cancel('Request canceled due to component unmounting.');
        };
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Axios Request Cancellation Example</h1>
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

export default CancelableFetcher;
