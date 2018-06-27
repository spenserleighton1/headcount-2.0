import React from 'react';
import './styles.css'
import PropTypes from 'prop-types';

const Card = (props) => {
  // console.log(props)
  return(
    <div className='card'>
    <h3>{props.location}</h3>
    {Object.keys(props.stats).map((stat, i) => {
      return <p 
              key={i}
              style={props.stats[stat] >= 0.5 ? {color: 'red'} : {color: 'green'}}>
              {stat}: {props.stats[stat]}
              </p>})}
    </div>
    )
}

Card.propTypes = {
  props: PropTypes.object.isRequired
}
export default Card;
