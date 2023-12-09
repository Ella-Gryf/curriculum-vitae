import React from 'react';
import './Arrow.css';

const CustomNextArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow icon" id='custom-next' onClick={onClick}>
      <div className="custom-arrow-icon">&gt;</div>
      <div className='custom-arrow-text'>Next</div>
    </div>
  );
};

export default CustomNextArrow;
