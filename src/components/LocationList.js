import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';

const handleWeatherLocationClick = (city, onSelectedLocation) => {
  onSelectedLocation(city);
};

const stringToComponent = (cities, onSelectedLocation) => {
  return cities.map(city => {
    return (
      <WeatherLocation
        key={city}
        city={city}
        onWeatherLocationClick={ () => handleWeatherLocationClick(city, onSelectedLocation) }
      />
    );
  });
};

const LocationList = ({ cities, onSelectedLocation }) => {
  return (
    <div>
      { stringToComponent(cities, onSelectedLocation) }
    </div>
  );
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func.isRequired
};

export default LocationList;
