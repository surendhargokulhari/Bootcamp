import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ParallelFetcher = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            const endpoints = [
                'https://jsonplaceholder.typicode.com/posts',
                'https://jsonplaceholder.typicode.com/users',
                'https://jsonplaceholder.typicode.com/comments'
            ];

            try {
               
                const responses = await Promise.all(endpoints.map(url => axios.get(url)));
                

                const [posts, users, comments] = responses.map(response => response.data);

                
                const combinedData = { posts, users, comments };
                setData(combinedData);

            } catch (error) {
                setError('Failed to fetch data from one or more endpoints.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Parallel API Requests Example</h1>
            
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {data.posts && data.users && data.comments && (
                <div>
                    <h2>Posts</h2>
                    <ul>
                        {data.posts.slice(0, 5).map(post => (
                            <li key={post.id}>{post.title}</li>
                        ))}
                    </ul>

                    <h2>Users</h2>
                    <ul>
                        {data.users.slice(0, 5).map(user => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>

                    <h2>Comments</h2>
                    <ul>
                        {data.comments.slice(0, 5).map(comment => (
                            <li key={comment.id}>{comment.body}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ParallelFetcher;
