import React from 'react';

const ForecastCard = ({ data }) => {
  const date = new Date(data.dt * 1000).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="bg-white p-4 rounded shadow-md text-center">
      <h3 className="font-semibold">{date}</h3>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="icon"
        className="mx-auto"
      />
      <p>{Math.round(data.temp.day)}°C</p>
      <p className="text-sm text-gray-600">{data.weather[0].main}</p>
    </div>
  );
};

export default ForecastCard;
