import React from 'react';
import Card from '../Card';
import PropTypes from 'prop-types';

const CardContainer = (props) => {
  const districtData = Object.keys(props.data).map((district, index) => {
    return <Card 
      location={ props.data[district].location }
      stats={ props.data[district].stats }
      key={ index } 
      select={ props.data[district].selected }
      findDistrictByClick={ props.findDistrictByClick }
    />;
  });
  return (
    <div>
      { districtData }
    </div>
  );
};

CardContainer.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  findDistrictByClick: PropTypes.func.isRequired
};

export default CardContainer;