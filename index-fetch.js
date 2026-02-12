// Fetch-based example: get weather for Sousse in metric units and French
require('dotenv').config();
const API_KEY = process.env.API_KEY;

async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=fr`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) {
      console.error('API error:', data);
      return;
    }

    const description = data.weather[0].description;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;

    console.log('Ville:', city);
    console.log('Description:', description);
    console.log('Température (°C):', temperature);
    console.log('Humidité (%):', humidity);
  } catch (err) {
    console.error('Fetch failed:', err.message || err);
  }
}

// Run for Sousse
fetchWeather('Sousse');
