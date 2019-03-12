import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';
import './styles.css';

const handleWeatherLocationClick = (city, onSelectedLocation) => {
  onSelectedLocation(city);
};

const stringToComponent = (cities, onSelectedLocation) => {
  return cities.map(city => {
    return (
      <WeatherLocation
        key={ city.key }
        city={ city.name }
        onWeatherLocationClick={ () => handleWeatherLocationClick(city.name) }
        data={ city.data }
      />
    );
  });
};

const LocationList = ({ cities, onSelectedLocation }) => {
  return (
    <div className='locationList'>
      { stringToComponent(cities, onSelectedLocation) }
    </div>
  );
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func.isRequired
};

export default LocationList;
