import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Toluca,mx',
  'Chihuahua,mx',
  'Bogota,col',
  'Buenos Aires,ar',
  'Washington,us',
  'Barcelona,es',
];

class App extends Component {

  handleSelectedLocation = city => {
  }

  render() {
    return (
      <div className="App">
        <LocationList
          cities={cities}
          onSelectedLocation={ this.handleSelectedLocation }
        />
      </div>
    );
  }
}

export default App;
