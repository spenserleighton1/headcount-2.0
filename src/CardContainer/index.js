import React from 'react';
import Card from '../Card'

const CardContainer = (props) => {
  const districtData = Object.keys(props.data)
    .map((district, index) => {
      return <Card location={props.data[district].location}
                   stats={props.data[district].stats}
                   key={index} 
                 />
  })
  return(
    <div>
    {districtData}
    </div>
    )
}
export default CardContainer;