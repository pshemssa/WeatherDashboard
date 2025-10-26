import React, { useState, useEffect } from 'react';

const WeatherCard = ({ weatherData, loading, error }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-300">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-300">
        <div className="text-red-500 dark:text-red-400 text-center">
          <p className="font-semibold">Error loading weather data</p>
          <p className="text-sm mt-2">{error}</p>
        </div>
      </div>
    );
  }

  if (!weatherData) {
    return null;
  }

  const getWeatherIcon = (condition) => {
    const conditionLower = condition.toLowerCase();
    if (conditionLower.includes('sun') || conditionLower.includes('clear')) {
      return '☀️';
    } else if (conditionLower.includes('cloud')) {
      return '☁️';
    } else if (conditionLower.includes('rain')) {
      return '🌧️';
    } else if (conditionLower.includes('snow')) {
      return '❄️';
    } else if (conditionLower.includes('wind')) {
      return '💨';
    } else {
      return '🌈';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-300">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
        Current Weather
      </h2>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <span className="text-4xl">{getWeatherIcon(weatherData.condition)}</span>
          <div>
            <div className="text-3xl font-bold text-gray-800 dark:text-white">
              {weatherData.temperature}°
            </div>
            <div className="text-gray-600 dark:text-gray-300 capitalize">
              {weatherData.condition}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-300">Wind Speed</span>
          <span className="font-semibold text-gray-800 dark:text-white">
            {weatherData.windSpeed} mph
          </span>
        </div>
        
        
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-300">Current Time</span>
          <span className="font-semibold text-gray-800 dark:text-white">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;