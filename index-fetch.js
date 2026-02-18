// Fetch-based example: get weather for Sousse in metric units and French
require('dotenv').config();
const API_KEY = process.env.API_KEY;

function fetchWeather(city, callback) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=fr`;
  
  fetch(url)
    .then((res) => res.json().then((data) => ({ ok: res.ok, data })))
    .then(({ ok, data }) => {
      if (!ok) {
        callback(new Error('API error: ' + JSON.stringify(data)), null);
        return;
      }
      
      const description = data.weather[0].description;
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      
      callback(null, {
        city,
        description,
        temperature,
        humidity
      });
    })
    .catch((err) => {
      callback(err, null);
    });
}

// Run for Sousse
fetchWeather('Sousse', (error, result) => {
  if (error) {
    console.error('Fetch failed:', error.message || error);
    return;
  }
  
  console.log('Ville:', result.city);
  console.log('Description:', result.description);
  console.log('Température (°C):', result.temperature);
  console.log('Humidité (%):', result.humidity);
});
 