// Axios-based example: get weather for Sousse in metric units and French
require('dotenv').config();
const axios = require('axios');
const API_KEY = process.env.API_KEY;

async function axiosWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=fr`;
  try {
    const res = await axios.get(url);
    const data = res.data;

    const description = data.weather[0].description;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;

    console.log('Ville:', city);
    console.log('Description:', description);
    console.log('Température (°C):', temperature);
    console.log('Humidité (%):', humidity);
  } catch (err) {
    if (err.response) console.error('API error:', err.response.data);
    else console.error('Request failed:', err.message || err);
  }
}

// Run for Sousse
axiosWeather('Sousse');
