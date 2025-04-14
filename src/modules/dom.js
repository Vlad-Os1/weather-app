import getWeatherData from './weather';

export default class DOM {
  static updateData(data) {
    if (data && data.location && data.weatherData) {
      let content = document.querySelector('.search-result');
      content.style.display = 'flex';
      content.innerHTML = `
      <h1>${data.location}</h1>
      <p>Feels like: ${data.weatherData.temp}&deg;C</p>
      <p>Wind speed: ${data.weatherData.windSpeed}km/h</p>
      <p>Humidity: ${data.weatherData.humidity}%</p>
      <p>Condition: ${data.weatherData.condition}</p>
      `;
    }
  }

  static async getData() {
    const city = document.getElementById('city-name').value.trim();
    try {
      const data = await getWeatherData(city);
      if (!data) {
        alert(
          'Weather data could not be retrieved. Check if the city name is correct'
        );
        return;
      }
      DOM.updateData(data);
    } catch (error) {
      alert(`Error occured: ${error.message}`);
    }
  }

  static setEvents() {
    const form = document.getElementById('get-weather-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      DOM.getData();
    });
  }
}
