import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper.js';
import kinderData from './data/kindergartners_in_full_day_program.js';
import CardContainer from './CardContainer'

var district = new DistrictRepository(kinderData);

class App extends Component {
  constructor() {
    super()
    this.state = {
      districtData: district.dataCleaner(kinderData)
    }
  }
  render() {
    return (
      <div>
      <CardContainer data={this.state.districtData}/>
      </div>
    );
  }
}

export default App;
