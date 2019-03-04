import converter from 'convert-units';
import weathers from './../constants/weathers';

const getWeatherState = weatherData => weathers.sunny;

const convertTemperature = kelvinDegrees => {
  const temperature = converter(kelvinDegrees).from('K').to('C');
  const roundTemperature = Number(temperature).toFixed(2);

  return parseFloat(roundTemperature);
};

const formatWeatherData = weatherData => {
  const { main, name, wind } = weatherData;
  const { humidity, temp } = main;
  const { speed } = wind;
  const weatherState = getWeatherState();
  const temperature = convertTemperature(temp);

  return {
    temperature,
    weatherState,
    humidity,
    wind: `${speed} m/s`,
    city: name,
  };
};

export default formatWeatherData;
