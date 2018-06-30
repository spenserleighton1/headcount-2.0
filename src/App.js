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
    let d = district.findByName(str)

    const compare = (str) => {
      Object.keys(this.state.districtData).forEach(district => {
        if (str === district) {
          return this.state.districtData[district].selected = true
        } else if (str === district && this.state.districtData[district].selected === true) {
          this.state.districtData[district].selected = false
          console.log(this.state.districtData[district].selected)
          return this.state.districtData[district]
        }
      })
    }

    if (!d.selected && Object.keys(this.state.comparedDistricts).length < 2) {
      this.setState({ districtData: {...this.state.districtData, ...compare(str)}})

      d.selected = true
      let newObject = {...this.state.comparedDistricts, ...district.findAllMatches(str) }
      this.setState({ comparedDistricts: newObject })
    } else if (d.selected && d.location === str) {

      d.selected = false

      let selected = Object.keys(this.state.comparedDistricts).reduce((acc, district) => {
        if (this.state.comparedDistricts[district].selected) {
          acc[this.state.comparedDistricts[district].location] = this.state.comparedDistricts[district]
        }
        return acc
      },{})
      this.setState({ comparedDistricts: selected})
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
