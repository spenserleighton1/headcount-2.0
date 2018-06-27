import React from 'react';
import Card from '../Card';
import PropTypes from 'prop-types';

const CardContainer = (props) => {
  const districtData = Object.keys(props.data).map((district, i) => {
      return <Card 
                location={props.data[district].location}
                stats={props.data[district].stats}
                key={i} 
            />
  })
  return(
    <div>
    {districtData}
    </div>
    )
}

Card.propTypes = {
  props: PropTypes.object.isRequired
}
export default CardContainer;