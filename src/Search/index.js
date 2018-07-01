import React, { Component } from 'react';
import './styles.css'

class Search extends Component {
  
  handleChange = (event) => {
    this.props.findDistrict(event.target.value)
  }

  handleSublit = (event) => {
    event.preventDefault()
    console.log(event)
    this.props.findDistrictByClick(event.target.value)
  }

  render() {
    return (
      <form onSubmit={ (event) => { this.handleSublit } }>
        <input
          placeholder='Search for a district'
          type="text"
          onChange={ this.handleChange } /> 
        <h1 className='header'>HeadCount 2.0</h1>
      </form>
      )
  }
}

export default Search;