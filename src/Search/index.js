import React, { Component } from 'react';
import './styles.css'

class Search extends Component {
  handleChange = (event) => {
    this.props.findDistrict(event.target.value)
  }

  render() {
    return (
      <form>
        <input
          type="text"
          onChange={ this.handleChange } /> 
      </form>
    )
  }
}

export default Search;