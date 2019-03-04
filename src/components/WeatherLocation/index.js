import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData/';
import formatWeatherData from '../../services/formatWeatherData';
import './styles.css';
import weathers from './../../constants/weathers';
import { api_weather } from '../../constants/apiWeather';


class WeatherLocation extends Component {

  constructor() {
    super();
    this.state = {
      city: 'Guadalajara',
      data: null
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.handleOnClick();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  componentWillMount() {
    console.log('UNSAFE componentWillMount');
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('UNSAFE componentWillUpdate');
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
    console.log('render');

    return (
      <div className='weatherLocationCont'>
        <Location city={city}/>
        {
          data ?
            <WeatherData data={data}/> :
            <CircularProgress/>
        }
      </div>
    );
  }
}

export default WeatherLocation;
