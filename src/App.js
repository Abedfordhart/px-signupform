import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar.js';
import ExpertProfileBasics from './components/ExpertProfileBasics/ExpertProfileBasics.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <ExpertProfileBasics/>
      </div>
    );
  }
}

export default App;
