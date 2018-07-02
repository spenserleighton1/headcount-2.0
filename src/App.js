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
    console.log(this.state.comparedDistricts)
    let d = district.findByName(str)

    const compare = (str) => {
      Object.keys(this.state.districtData).forEach(district => {
        if (str === district && this.state.districtData[district].selected === true) {
          return this.state.districtData[district].selected = false
        } else if (str === district) {
          return this.state.districtData[district].selected = true
        }
      })
    }

    if (!d.selected && Object.keys(this.state.comparedDistricts).length < 2) {
      d.selected = true

      this.setState({ comparedDistricts: {...this.state.comparedDistricts, ...district.findAllMatches(str) } })
      this.setState({ districtData: {...this.state.districtData, ...compare(str)}})
    } else if (d.selected === true && d.location === str) {
      d.selected = false

      Object.keys(this.state.comparedDistricts).reduce((acc, district) => {
        if (this.state.comparedDistricts[district].selected) {
          acc[this.state.comparedDistricts[district].location] = this.state.comparedDistricts[district]
        }
        this.setState({ comparedDistricts: acc})
        return acc
      },{})
      this.setState({ districtData: {...this.state.districtData, ...compare(str)}})
    }
}
 
  render() {
    return (
      <div>
        <Search 
          findDistrict={ this.findDistrict } 
          findDistrictByClick={ this.findDistrictByClick } />
        <DisplayComparedCards 
          data={ this.state.comparedDistricts }
          findDistrictByClick={ this.findDistrictByClick }
          compareDistrictAverages={ district.compareDistrictAverages } />
        <CardContainer 
          data={ this.state.districtData }
          findDistrictByClick={ this.findDistrictByClick } />
      </div>
    );
  }
}

export default App;
