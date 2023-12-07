import React from 'react';
import './Arrow.css';

const CustomNextArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow icon" id='custom-next' onClick={onClick}>
      &gt; Next
    </div>
  );
};

export default CustomNextArrow;
