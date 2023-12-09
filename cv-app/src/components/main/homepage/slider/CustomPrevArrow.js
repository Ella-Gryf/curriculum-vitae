import React from 'react';
import './Arrow.css';

const CustomPrevArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow icon" id='custom-next' onClick={onClick}>
      <div className="custom-arrow-icon">&lt;</div>
      <div className='custom-arrow-text'>Prev</div>
    </div>
  );
};

export default CustomPrevArrow;
