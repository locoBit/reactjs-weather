import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData/';
import formatWeatherData from '../../services/formatWeatherData';
import './styles.css';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';

class WeatherLocation extends Component {

  constructor(props) {
    super(props);
    const { city } = props;

    this.state = {
      city,
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
    const api_weather = getUrlWeatherByCity(this.state.city);

    fetch(api_weather)
      .then(response => response.json())
      .then(data => {
        const weatherData = formatWeatherData(data);

        this.setState({
          data: weatherData,
        });
      });
  };

  render() {
    const { onWeatherLocationClick } = this.props;
    const { city, data } = this.state;

    return (
      <div className='weatherLocationCont' onClick={ onWeatherLocationClick }>
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

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func.isRequired,
};

export default WeatherLocation;
