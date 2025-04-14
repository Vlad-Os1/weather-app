import { transliterate } from 'transliteration';

export default async function getWeatherData(cityName) {
  if (typeof cityName !== 'string' || !cityName.trim()) {
    throw new Error('Invalid city name');
  }
  try {
    let cityInLatin = transliterate(cityName);
    let response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityInLatin}?unitGroup=metric&key=5YGSJ2NCM4BT5D27GDDUSKBNM&contentType=json`
    );
    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    let data = await response.json();

    if (!data.currentConditions) {
      throw new Error('Weather data is unavailable');
    }

    return {
      weatherData: parseWeatherData(data.currentConditions),
      location: data.resolvedAddress,
    };
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    return null;
  }
}

function parseWeatherData({
  feelslike,
  humidity,
  windspeed,
  conditions,
  icon,
}) {
  return {
    temp: feelslike,
    humidity: humidity,
    windSpeed: windspeed,
    condition: conditions,
    icon: icon,
  };
}
