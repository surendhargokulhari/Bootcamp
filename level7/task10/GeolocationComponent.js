import React from 'react';
import useGeolocation from './useGeolocation';

const GeolocationComponent = () => {
    const { location, error } = useGeolocation();

    return (
        <div className="p-4 text-center">
            <h1 className="mb-4">Geolocation Tracker</h1>
            {error ? (
                <div className="alert alert-danger">{error}</div>
            ) : location ? (
                <div className="alert alert-success">
                    <p>Latitude: <strong>{location.latitude}</strong></p>
                    <p>Longitude: <strong>{location.longitude}</strong></p>
                </div>
            ) : (
                <p>Fetching location...</p>
            )}
        </div>
    );
};

export default GeolocationComponent;
