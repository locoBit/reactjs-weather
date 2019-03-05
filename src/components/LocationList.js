import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => {
  return (
    <div>
      <WeatherLocation city='Toluca,mx'/>
      <WeatherLocation city='Bogota,col'/>
      <WeatherLocation city='Buenos Aires,ar'/>
      <WeatherLocation city='Mexico,mx'/>
      <WeatherLocation city='Chihuahua,mx'/>
    </div>
  );
};

export default LocationList;
