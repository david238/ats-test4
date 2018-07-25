import React, { Component } from 'react';
import './App.css';
import Uploads from './components/Uploads/Uploads';
import Citizen from './containers/Citizen/Citizen';
import ModelCar from './containers/ModelCar/ModelCar';
import Gender from './containers/Gender/Gender';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Uploads />
        <ModelCar />
        <Gender />
        <Citizen />
      </div>
    );
  }
}

export default App;
