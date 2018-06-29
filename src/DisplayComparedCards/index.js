import React from 'react';
import Card from '../Card';
import PropTypes from 'prop-types';

const DisplayComparedCards = (props) => {
  const comparedCards = Object.keys(props.data).map((district, i) => {
    return <Card 
              location={ props.data[district].location }
              stats={ props.data[district].stats }
              key={ i } 
              selected={ props.data[district].selected }
              findDistrictByClick={ props.findDistrictByClick }
          />
  })
  return(
    <div>
      { comparedCards }
    </div>
    )
}

export default DisplayComparedCards;