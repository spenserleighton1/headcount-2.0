import React from 'react';
import './styles.css'
import PropTypes from 'prop-types';

const Card = (props) => {
  return(
    <div className='card selectedFalse'
         onClick={()=> { }}>
    <h3>{props.location}</h3>
    <ul>
    {Object.keys(props.stats).map((stat, i) => {
      return <li 
              key={i}
              selected={props.selected}
              style={props.stats[stat] >= 0.5 ? {color: 'red'} : {color: 'green'}}>
              {stat}: {props.stats[stat]}
              </li>})}
    </ul>
    </div>
  )
}

export default Card;
