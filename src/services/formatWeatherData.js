import converter from 'convert-units';
import weathers from './../constants/weathers';
import weathersIds from './../constants/weathersIds';

const getWeatherState = weather => {
  const { id } = weather;

  return weathersIds[id] ? weathersIds[id] : weathers.cloud;
};

const convertTemperature = kelvinDegrees => {
  const temperature = converter(kelvinDegrees).from('K').to('C');
  const roundTemperature = Number(temperature).toFixed(0);

  return parseFloat(roundTemperature);
};

const formatWeatherData = weatherData => {
  const { main, wind, weather } = weatherData;
  const { humidity, temp } = main;
  const { speed } = wind;
  const weatherState = getWeatherState(weather[0]);
  const temperature = convertTemperature(temp);
  const data = {
    temperature,
    weatherState,
    humidity,
    wind: `${speed} m/s`,
  };

  return data;
};

export default formatWeatherData;
