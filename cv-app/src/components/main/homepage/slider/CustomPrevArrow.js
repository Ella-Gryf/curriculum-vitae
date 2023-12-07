import React from 'react';

const CustomPrevArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow icon" id='custom-prev' onClick={onClick}>
      &lt; Prev
    </div>
  );
};

export default CustomPrevArrow;
