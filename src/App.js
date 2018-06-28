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
    //ternary, if in state remove
    this.setState({ comparedDistricts: district.findAllMatches(str)})
  }



  render() {
    return (
      <div>
        <Search 
          findDistrict={ this.findDistrict } />
        <DisplayComparedCards 
          data={ this.state.comparedDistricts }/>
        <CardContainer 
          data={ this.state.districtData }
          findDistrictByClick={ this.findDistrictByClick } />
      </div>
    );
  }
}

export default App;
