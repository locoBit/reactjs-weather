import React from 'react';
import WeatherIcons from 'react-weathericons';
import weathers from './../../../constatns/weathers';
import PropTypes from 'prop-types';
import './styles.css';

const getWeatherIcon = weatherState => {
  const sizeIcon = '4x';
  const icon = weathers[weatherState] ? weathers[weatherState] : weathers.SUNNY;

  return <WeatherIcons className='wicon' name={icon} size={sizeIcon}/>;
};

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className='weatherTemperatureCont'>
    {
      getWeatherIcon(weatherState)
    }
    <span className='temperature'>{ `${temperature}` }</span>
    <span className='temperatureType'>Cº</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
