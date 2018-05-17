import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar.js';
import ExpertProfileBasics from './components/ExpertProfileBasics/ExpertProfileBasics.js';
import ExpertProfileExpertise from './components/ExpertProfileExpertise/ExpertProfileExpertise.js';
import ExpertProfileMisc from './components/ExpertProfileMisc/ExpertProfileMisc.js';
import CustomButton from './components/Button/Button.js';

class App extends Component {

  state = {
    basicsFormData: {
      'Organization': '',
      'Institutional/Company Bio Link': '',
      'Department': '',
      'ResearchGate Profile Link': '',
      'Title': '',
      'Academia.edu Profile Link': '',
    },
    basicsFormData2: {
      'oneSentenceBio': '',
      'summaryOfBackground': ''
    },
    sectors: {
      'Food And Agriculture': false,
      'Life Sciences: Medical Devices': false,
      'Life Sciences: Medical Diagnostics': false,
      'Life Sciences: Biophrama': false,
      'Energy': false,
      'Computing: Hardware': false,
      'Computing: Software': false,
      'Computing: Networks': false,
      'Chemicals': false,
      'Space Exploration': false,
      'Green Technologies': false,
      'Manufacturing': false,
      'Transportation': false
    },
    technologies: {
      'Robotics': false,
      'Data Science': false,
      'Artificial Intelligence': false,
      'Synthetic Biology': false,
      'New Materials': false,
      'Chemistry': false,
      'Engineering/Process Innovation': false
    },
    functions: {
      'Science & Technology': false,
      'Business Operations': false,
      'Regulatory': false,
      'Intellectual Property': false
    },
    otherAreas: '',
    keywordExpertise: '',
    summaryOfExperience: '',
    'yes': false,
    'no': false,
    'hearAboutUs': ''
  }

  handleInputChange = this.handleInputChange.bind(this);
  isChecked = this.isChecked.bind(this)

  handleInputChange(changingState, event) {
    const {name, value} = event.target;
    this.setState({
      [changingState]: {...this.state[changingState], [name]: value}
    });
    console.log(changingState)
  }

  isChecked(event){
    const {name, value} = event.target
    console.log(name, value)
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <ExpertProfileBasics basicsFormData={this.state} handleInputChange={this.handleInputChange}/>
        <ExpertProfileExpertise 
          handleInputChange={this.handleInputChange} 
          sectors={this.state.sectors} 
          technologies={this.state.technologies} 
          functions={this.state.functions}
          isChecked={this.isChecked}
        />
        <ExpertProfileMisc handleInputChange={this.handleInputChange}/>
        <CustomButton/>
      </div>
    );
  }
}

export default App;
