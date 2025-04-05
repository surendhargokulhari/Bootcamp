
import React from 'react';

const WeatherCard = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md text-center w-72">
      <h2 className="text-xl font-bold">{data.name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="icon"
        className="mx-auto"
      />
      <p className="text-2xl">{Math.round(data.main.temp)}°C</p>
      <p>{data.weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;
