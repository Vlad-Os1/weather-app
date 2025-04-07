import './styles.css';
import getWeatherData from './modules/weather.js';

(async () => {
  let result = await getWeatherData('Kryve Ozero');
  console.log(result);
})();
