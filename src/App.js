import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper.js';
import kinderData from './data/kindergartners_in_full_day_program.js';
import CardContainer from './CardContainer'
import Search from './Search'
import DisplayComparedCards from './DisplayComparedCards'

const district = new DistrictRepository(kinderData);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      districtData: district.dataCleaner(kinderData),
      comparedDistricts: {}

    }
  }

  findDistrict = (str) => {
    this.setState({ districtData: district.findAllMatches(str) })
  }

  findDistrictByClick = (str) => {
    const newObject = {...this.state.comparedDistricts, ...district.findAllMatches(str) }
    const notInState = () => this.setState({ comparedDistricts: newObject})
      if(Object.keys(this.state.comparedDistricts).length < 2) {
          notInState()
  }

}

  render() {
    return (
      <div>
        <Search 
          findDistrict={ this.findDistrict } />
        <DisplayComparedCards 
          data={ this.state.comparedDistricts }
          findDistrictByClick={ this.findDistrictByClick }/>
        <CardContainer 
          data={ this.state.districtData }
          findDistrictByClick={ this.findDistrictByClick } />
      </div>
    );
  }
}

export default App;
