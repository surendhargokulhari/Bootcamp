import React from 'react';
import useLocalStorage from './useLocalStorage';

const LocalStorageComponent = () => {
    const [name, setName] = useLocalStorage('name', '');

    return (
        <div className="p-4">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control mb-3"
                placeholder="Enter your name"
            />
            <p className="mt-3">Saved Name: <strong>{name}</strong></p>
        </div>
    );
};

export default LocalStorageComponent;
