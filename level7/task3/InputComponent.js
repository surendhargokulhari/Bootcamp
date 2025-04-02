import React from 'react';
import useInput from './useInput';

const InputComponent = () => {
    const { value, onChange, ref } = useInput('');

    return (
        <div className="p-4">
            <input
                type="text"
                value={value}
                onChange={onChange}
                ref={ref}
                className="form-control mb-3"
                placeholder="Type something..."
            />
            <p className="mt-3">Current Value: <strong>{value}</strong></p>
        </div>
    );
};

export default InputComponent;
