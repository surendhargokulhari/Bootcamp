import React, { useState, useEffect } from 'react';
import useDebounce from './useDebounce';

const DebouncedSearchComponent = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const debouncedQuery = useDebounce(query, 500); 

    useEffect(() => {
        if (debouncedQuery) {
            fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${debouncedQuery}`)
                .then((response) => response.json())
                .then((data) => setResults(data))
                .catch((error) => console.error('Error fetching data:', error));
        } else {
            setResults([]);
        }
    }, [debouncedQuery]);

    return (
        <div className="p-4">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="form-control mb-3"
                placeholder="Search posts..."
            />

            {results.length > 0 ? (
                <ul className="list-group">
                    {results.map((result) => (
                        <li key={result.id} className="list-group-item">
                            {result.title}
                        </li>
                    ))}
                </ul>
            ) : (
                debouncedQuery && <p>No results found.</p>
            )}
        </div>
    );
};

export default DebouncedSearchComponent;
