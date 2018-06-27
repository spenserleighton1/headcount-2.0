import React from 'react';

const Card = (props) => {
  // console.log(props)
  return(
    <div>
    <h3>{props.location}</h3>
    {Object.keys(props.stats).map((stat, index) => {
      return <p key={index}>{stat}: {props.stats[stat]}</p>})}
    </div>
    )
}
export default Card;