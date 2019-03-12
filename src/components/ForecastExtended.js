import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

const renderPogress = () => {
  return <h3>Cargando pronóstico...</h3>;
};

const renderForecastItemDays = forecastData => {
  return forecastData.map(forecast => {
    const { weekDay, hour, data } = forecast;

    return <ForecastItem
             key={ `${weekDay}${hour}` }
             weekDay={ weekDay }
             hour={ hour.toString() }
             data={ data }
           />;
  });
};

const ForecastExtended = ({ city, forecastData }) => (
  <div>
    <h2 className='forecast-title'>Pronóstico exendido para { city }</h2>
    {
      forecastData ?
        renderForecastItemDays(forecastData) :
        renderPogress()
    }
  </div>
);

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array,
};

export default ForecastExtended;
