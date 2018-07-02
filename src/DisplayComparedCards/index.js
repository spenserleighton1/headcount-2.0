import React from 'react';
import Card from '../Card';
import PropTypes from 'prop-types';
import './styles.css'

const DisplayComparedCards = (props) => {
  const comparedCards = Object.keys(props.data).map((district, i) => {
    return <Card 
              location={ props.data[district].location }
              stats={ props.data[district].stats }
              key={ i } 
              select={ props.data[district].selected }
              findDistrictByClick={ props.findDistrictByClick }
              compareDistrictAverages={ props.compareDistrictAverages }
          />
  })
   
  const dataToCompare = Object.keys(props.data)


  if(dataToCompare.length === 2) {
    const data = props.compareDistrictAverages(dataToCompare[0], dataToCompare[1])
    return(
        <div>
          { comparedCards }
          <div className='comparedCards'>
            <p> Comparison: </p>
            <p>{ dataToCompare[0] }: { data[dataToCompare[0]] }</p>
            <p>{ dataToCompare[1] }: { data[dataToCompare[1]] }</p>
            <p>{ 'Compared' }: { data['compared'] }</p>
          </div>
        </div>
      )
  }
    
  return(
    <div>
      { comparedCards }
    </div>
    )
}

Card.propTypes = {

}

export default DisplayComparedCards;