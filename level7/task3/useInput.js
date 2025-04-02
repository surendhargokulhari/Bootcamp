import { useState, useRef } from 'react';

function useInput(initialValue = '') {
    const [value, setValue] = useState(initialValue);
    const inputRef = useRef(null);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return { value, onChange: handleChange, ref: inputRef };
}

export default useInput;
