import React, { useState, useEffect } from 'react';
import axiosInstance from './axiosConfig';

const DataFetcher = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get('/posts');
                setPosts(response.data.slice(0, 10)); // Display only 10 posts
            } catch (error) {
                setError('Failed to fetch data. Please try again.');
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DataFetcher;
