import React, { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import GitHubCard from './components/GithubCard';
import WeatherCard from './components/WeatherCard';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [githubData, setGithubData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [githubLoading, setGithubLoading] = useState(true);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [githubError, setGithubError] = useState(null);
  const [weatherError, setWeatherError] = useState(null);

  const GITHUB_USERNAME = 'pshemssa';

  // Fetch GitHub Data
  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setGithubLoading(true);
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const data = await response.json();
        setGithubData(data);
        setGithubError(null);
      } catch (error) {
        setGithubError(error.message);
        console.error('Error fetching GitHub data:', error);
      } finally {
        setGithubLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  // Fetch Weather Data (using OpenWeatherMap API)
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setWeatherLoading(true);
        
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current=temperature_2m,wind_speed_10m,weather_code');
        
        if (!response.ok) {
          throw new Error(`Weather API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Map weather code to condition
        const weatherConditions = {
          0: 'Clear sky',
          1: 'Mainly clear',
          2: 'Partly cloudy',
          3: 'Overcast',
          45: 'Fog',
          48: 'Depositing rime fog',
          51: 'Light drizzle',
          53: 'Moderate drizzle',
          55: 'Dense drizzle',
          61: 'Slight rain',
          63: 'Moderate rain',
          65: 'Heavy rain',
          80: 'Slight rain showers',
          81: 'Moderate rain showers',
          82: 'Violent rain showers',
          95: 'Thunderstorm'
        };

        const mappedData = {
          temperature: Math.round(data.current.temperature_2m),
          condition: weatherConditions[data.current.weather_code] || 'Unknown',
          windSpeed: Math.round(data.current.wind_speed_10m),
          location: 'Kigali City'
        };

        setWeatherData(mappedData);
        setWeatherError(null);
      } catch (error) {
        setWeatherError(error.message);
        console.error('Error fetching weather data:', error);
      } finally {
        setWeatherLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'
    }`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <GitHubCard 
            userData={githubData}
            loading={githubLoading}
            error={githubError}
          />
          
          <WeatherCard 
            weatherData={weatherData}
            loading={weatherLoading}
            error={weatherError}
          />
        </div>
      </main>
    </div>
  );
}

export default App;