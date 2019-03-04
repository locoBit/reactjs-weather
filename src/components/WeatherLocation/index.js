import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData/';
import converter from 'convert-units';
import './styles.css';
import weathers from './../../constants/weathers';

const api_key = '4b337ebf55fee6732d119de555cd6c9a';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather';
const location = 'Toluca,mx';
const api_base = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data = {
  temperature: 5,
  weatherState: weathers.sunny,
  humidity: 10,
  wind: '10 m/s'
};

class WeatherLocation extends Component {

  constructor() {
    super();
    this.state = {
      city: 'Guadalajara',
      data
    };
  }

  getWeatherState = weatherData => weathers.sunny;

  convertTemperature = kelvinDegrees => {
    const temperature = converter(kelvinDegrees).from('K').to('C');
    const roundTemperature = Number(temperature).toFixed(2);

    return parseFloat(roundTemperature);
  };

  formateWeatherData = weatherData => {
    const { main, name, wind } = weatherData;
    const { humidity, temp } = main;
    const { speed } = wind;
    const weatherState = this.getWeatherState();
    const temperature = this.convertTemperature(temp);

    return {
      temperature,
      weatherState,
      humidity,
      wind: `${speed} m/s`,
      city: name,
    };
  };

  handleOnClick = () => {
    fetch(api_base)
      .then(response => response.json())
      .then(data => {
        const weatherData = this.formateWeatherData(data);

        this.setState({
          data: weatherData,
          city: weatherData.city,
        });
      });

  };

  render() {
    const { city, data } = this.state;

    return (
      <div className='weatherLocationCont'>
        <Location city={city}/>
        <WeatherData data={data}/>
        <button type='button' onClick={this.handleOnClick}>Actualizar</button>
      </div>
    );
  }
}

export default WeatherLocation;
