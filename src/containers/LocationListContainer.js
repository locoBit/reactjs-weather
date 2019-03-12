import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSelectedCity, setWeather } from './../actions';
import LocationList from './../components/LocationList';
import getWeatherCities from './../reducers';

class LocationListContainer extends Component {

  componentDidMount() {
    this.props.setWeather(this.props.cities);
  }

  handleSelectedLocation = city => {
    this.props.setCity(city);
  }

  render() {
    const { citiesWeather } = this.props;
    return (
      <LocationList
        cities={ citiesWeather }
        onSelectedLocation={ this.handleSelectedLocation }
      />
     );
  }
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setCity: value => dispatch(setSelectedCity(value)),
  setWeather: cities => dispatch(setWeather(cities)),
});
const mapStateToProps = state => ({ citiesWeather: getWeatherCities(state) });
const LocationListContainerConnected = connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);

export default LocationListContainerConnected;
