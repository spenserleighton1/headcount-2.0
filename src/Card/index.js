import React from 'react';
import './styles.css'
import PropTypes from 'prop-types';


const Card = (props) => {
  return(
    <div className={`card${props.select ? ' select' : ''}`}
         onClick={()=> { props.findDistrictByClick(props.location) }}>
    <h3>{props.location}</h3>
    <ul>
    {Object.keys(props.stats).map((stat, i) => {
      return <li 
              key={i}
              style={props.stats[stat] >= 0.5 ? {color: '#fff'} : {color: '#1D3557'}}>
              {stat}: {props.stats[stat]}
              </li>})}
    </ul>
    </div>
    )
}

Card.propTypes = {

}

export default Card;
