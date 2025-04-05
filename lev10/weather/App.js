// src/App.jsx
import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './weather components/WeatherCard';
import ForecastCard from './weather components/ForecastCard';
import './App.css'
const API_KEY = 'da21f09c9cb0098f35ac12567bacae6f'; 

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getWeather = async () => {
    console.log("Query:", query);
    console.log("Geo API URL:", `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${API_KEY}`);

    try {
      const geoRes = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${API_KEY}`);
      const geoData = await geoRes.json();

      if (geoData.length === 0) {
        setError('Location not found');
        return;
      }

      const { lat, lon } = geoData[0];

      const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
      const weatherData = await weatherRes.json();

      const forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${API_KEY}`);
      const forecastData = await forecastRes.json();

      setWeather(weatherData);
      setForecast(forecastData.daily.slice(1, 6)); 
      setError('');
    } catch (err) {
     
    }
  };


  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Weather App</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 rounded border"
        />
        <button
          onClick={getWeather}
          className=" text-white px-4 py-2 rounded  m-3 btn btn-warning"
        >
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {weather && <WeatherCard data={weather} />}
      {forecast.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {forecast.map((day, i) => (
            <ForecastCard key={i} data={day} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
