import React from 'react';
import './styles.css'

const Card = (props) => {
  // console.log(props)
  return(
    <div className='card'>
    <h3>{props.location}</h3>
    {Object.keys(props.stats).map((stat, index) => {
      return <p 
              key={index}
              style={props.stats[stat] >= 0.5 ? {color: 'red'} : {color: 'green'}}>{stat}: {props.stats[stat]}</p>})}
    </div>
    )
}
export default Card;
