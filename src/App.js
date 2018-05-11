import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
      </div>
    );
  }
}

export default App;
