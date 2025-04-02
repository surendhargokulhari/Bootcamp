import React from 'react';
import useFetch from './useFetch';

const FetchComponent = () => {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts/1');

    return (
        <div className="p-4">
            {loading && <p>Loading...</p>}
            {error && <p className="text-danger">Error: {error}</p>}
            {data && (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text">{data.body}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FetchComponent;
