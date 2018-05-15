import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar.js';
import ExpertProfileBasics from './components/ExpertProfileBasics/ExpertProfileBasics.js';
import ExpertProfileExpertise from './components/ExpertProfileExpertise/ExpertProfileExpertise.js';
import ExpertProfileMisc from './components/ExpertProfileMisc/ExpertProfileMisc.js';
import CustomButton from './components/Button/Button.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <ExpertProfileBasics/>
        <ExpertProfileExpertise/>
        <ExpertProfileMisc/>
        <CustomButton/>
      </div>
    );
  }
}

export default App;
