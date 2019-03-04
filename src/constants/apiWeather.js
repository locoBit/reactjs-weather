const api_key = '4b337ebf55fee6732d119de555cd6c9a';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather';
const location = 'Toluca,mx';

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
