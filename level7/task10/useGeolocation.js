import { useState, useEffect } from 'react';

function useGeolocation() {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            setError("Geolocation is not supported by your browser.");
            return;
        }

        const handleSuccess = (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
            setError(null);
        };

        const handleError = (error) => {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    setError("Location permission denied.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    setError("Location information is unavailable.");
                    break;
                case error.TIMEOUT:
                    setError("Location request timed out.");
                    break;
                default:
                    setError("An unknown error occurred.");
                    break;
            }
        };

        const watcher = navigator.geolocation.watchPosition(handleSuccess, handleError);

        return () => navigator.geolocation.clearWatch(watcher);
    }, []);

    return { location, error };
}

export default useGeolocation;
