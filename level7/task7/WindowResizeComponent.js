import React from 'react';
import useWindowResize from './useWindowResize';

const WindowResizeComponent = () => {
    const { width, height } = useWindowResize();

    return (
        <div className="p-4 text-center">
            <h1 className="mb-4">Window Size Tracker</h1>
            <div className="alert alert-info">
                Width: <strong>{width}px</strong>, Height: <strong>{height}px</strong>
            </div>
        </div>
    );
};

export default WindowResizeComponent;
