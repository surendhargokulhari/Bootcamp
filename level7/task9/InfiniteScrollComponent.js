import React, { useState } from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const InfiniteScrollComponent = () => {
    const [items, setItems] = useState(Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`));
    const [loading, setLoading] = useState(false);

    const loadMoreItems = () => {
        if (!loading) {
            setLoading(true);
            setTimeout(() => {
                const newItems = Array.from({ length: 20 }, (_, index) => `Item ${items.length + index + 1}`);
                setItems((prevItems) => [...prevItems, ...newItems]);
                setLoading(false);
            }, 1000);
        }
    };

    const loaderRef = useIntersectionObserver(loadMoreItems, { threshold: 0.1 });

    return (
        <div className="p-4">
            <h1 className="mb-4 text-center">Infinite Scrolling</h1>
            <ul className="list-group mb-3">
                {items.map((item, index) => (
                    <li key={index} className="list-group-item">
                        {item}
                    </li>
                ))}
            </ul>
            {loading && <p className="text-center">Loading...</p>}
            <div ref={loaderRef} className="mb-4" />
        </div>
    );
};

export default InfiniteScrollComponent;
