import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';


const Card = (props) => {
  return (
    <div 
      className={`card ${props.select ? ' select' : ''}`}
      onClick={()=> { props.findDistrictByClick(props.location); }}>
      <h3>{props.location}</h3>
      <ul>
        {Object.keys(props.stats).map((stat, index) => {
          return <li 
            key={index}
            style={props.stats[stat] >= 0.5 ? {color: '#fff'} : {color: '#1D3557'}}>
            {stat}: {props.stats[stat]}
          </li>; 
        })
        }
      </ul>
    </div>
  );
};

Card.propTypes = {
  select: PropTypes.string.isRequired,
  findDistrictByClick: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired
};

export default Card;
