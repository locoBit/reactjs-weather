import { api_key, url_base_weather } from '../constants/apiWeather';

const getUrlWeatherByCity = city => {
  return `${url_base_weather}?q=${city}&appid=${api_key}`;
};

export default getUrlWeatherByCity;
