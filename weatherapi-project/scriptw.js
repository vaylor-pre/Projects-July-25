// Initial load
document.addEventListener('DOMContentLoaded', function() {
    fetchWeather();
});

let weatherData = [];
const weatherDisplay = document.getElementById('weatherDisplay');
const locationInput = document.getElementById('locationInput');

// Function to fetch weather data
function fetchWeather() {
    const location = locationInput.value.trim() || 'Nairobi'; // Default to Nairobi if no input
    // Show loading state
    weatherDisplay.innerHTML = '<div class="loading">Loading weather data...</div>';
     var xhr = new XMLHttpRequest();
     const apiUrl = `http://api.weatherstack.com/current?access_key=1931e8859654b4d88db7de4ad8b91e91&query=${location}`;
      //api url for weatherstack API
     xhr.open('GET', apiUrl, true);
     xhr.onreadystatechange = function() {
        if (xhr.readyState === 4  && xhr.status === 200) {
                try {
                   var data = JSON.parse(xhr.responseText);
                   weatherData = processWeather(data);
                    displayWeather();
                    }
                    catch (e) {
                     weatherDisplay.innerHTML = 'Failed to load weather data';
                    console.error(e);
                    }
                   }

    };
     xhr.send();
}

// Process the Weatherstack API data
function processWeather(data) {
    return [{
        date: new Date(),
        temp: data.current.temperature,
        description: data.current.weather_descriptions[0],
        location: data.location.name,
        country: data.location.country,
        humidity: data.current.humidity,
        wind_speed: data.current.wind_speed,
        feels_like: data.current.feelslike,
        uv_index : data.current.uv_index,
        pressure: data.current.pressure,
    }];
}

// Display weather data in the UI
     function displayWeather() {
    const currentWeather = weatherData[0];
    // Format the date to be in a readable format
    const dateStr = currentWeather.date.toLocaleDateString('en-US', {
        weekday: 'long',month: 'short', day: 'numeric',hour: '2-digit',minute: '2-digit'
    });
       //  HTML structure for displaying weather
    weatherDisplay.innerHTML = `
        <div class="weather-container">
            <div class="weather-card">
                <h3>${currentWeather.location}, ${currentWeather.country}</h3>
                <div class="weather-info">
                    <div class="date">${dateStr}</div>
                    <div class="temp">${currentWeather.temp}°C</div>
                    <div class="description">${currentWeather.description}</div>
                    <div class="details">
                       <div>Humidity: ${currentWeather.humidity}%</div>
                        <div>Wind: ${currentWeather.wind_speed} km/h</div>
                        <div>Feels Like: ${currentWeather.feels_like}°C</div>
                        <div>UV Index: ${currentWeather.uv_index}</div>
                        <div>Pressure: ${currentWeather.pressure} hPa</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
// in the case of an error, display an error message
function showError(message) {
    weatherDisplay.innerHTML = `<div class="error">${message}</div>`;
    console.error(message);
}
