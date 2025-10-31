# Developer Dashboard

A responsive React dashboard that displays real-time GitHub profile information and current weather data with light/dark mode toggle.

## Features

- GitHub Profile Card with real-time data
- Current Weather Card with live updates
- Light/Dark mode toggle with persistent theme
- Responsive design for all devices
- Loading states and error handling

## APIs Used

- **GitHub API**: https://api.github.com/users/{pshemssa}
- **Open-Meteo Weather API**: https://open-meteo.com

## Technologies Used

- React
- Tailwind CSS
- Fetch API
- Vite

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/pshemssa/developer-dashboard.git
cd developer-dashboard
Install dependencies:

bash
npm install

bash
npm run dev
Open your browser and navigate to http://localhost:5173

Deployment
The project can be deployed on:


Netlify

Project Structure
text
src/
├── components/
│   ├── Navbar.jsx
│   ├── GitHubCard.jsx
│   └── WeatherCard.jsx
├── hooks/
│   └── useTheme.js
├── App.jsx
└── main.jsx


Live Demo
https://weather1dashb.netlify.app/ 

