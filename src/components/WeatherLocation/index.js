import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData/';
import formatWeatherData from '../../services/formatWeatherData';
import './styles.css';
import weathers from './../../constants/weathers';
import { api_weather } from '../../constants/apiWeather';


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


  handleOnClick = () => {
    fetch(api_weather)
      .then(response => response.json())
      .then(data => {
        const weatherData = formatWeatherData(data);

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
