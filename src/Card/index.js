import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';


const Card = (props) => {
<<<<<<< HEAD
  return(
    <div className={`card ${props.select ? ' select' : ''}`}
         onClick={()=> { props.findDistrictByClick(props.location) }}>
      <h3>{props.location}</h3>
      <ul>
        {Object.keys(props.stats).map((stat, i) => {
          return  <li 
                    key={i}
                    style={props.stats[stat] >= 0.5 ? {color: '#fff'} : {color: '#1D3557'}}>
                    {stat}: {props.stats[stat]}
                  </li>})}
      </ul>
    </div>
  )
}

Card.propTypes = {
  props: PropTypes.object
}
=======
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
>>>>>>> 1ec4d58971389d33ff929319f6bb7371937a45b2

export default Card;
