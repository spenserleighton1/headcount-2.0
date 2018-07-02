import React, { Component } from 'react';
import './styles.css';
import PropTypes from 'prop-types';

class Search extends Component {
  
  handleChange = (event) => {
    this.props.findDistrict(event.target.value);
  }

  render() {
    return (
      <form>
        <input

          className="input-form"

          placeholder='Search for a district'

          type="text"
          onChange={ this.handleChange } /> 
        <h1 className='header'>HeadCount 2.0</h1>
      </form>
    );
  }
}

Search.propTypes = {
  findDistrict: PropTypes.func.isRequired
};

export default Search;