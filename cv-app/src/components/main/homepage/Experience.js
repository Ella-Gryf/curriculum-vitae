import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TbHandFinger } from "react-icons/tb";
import Card from './Card.js';
import { data } from '../../../data/sliderData.js';
import './Experience.css';
import './slider/Sliders.css';

import CustomPrevArrow from './slider/CustomPrevArrow';
import CustomNextArrow from './slider/CustomNextArrow'; 


const Experience = () => {

const settings = {
  accessibility: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  focusOnSelect: true,
  prevArrow: <CustomPrevArrow />, 
  nextArrow: <CustomNextArrow />,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
    ]
  };

  return (
    <div className='experience base-grid'>
      <div className='base-container'>
        <Slider {...settings}>
          {data.map((dataEntry) => (
            <Card key={dataEntry.url} {...dataEntry} />
          ))}
        </Slider>
        <div id='scroll-instruction'><TbHandFinger /><h3>DRAG TO SCROLL</h3></div>
      </div>
    </div>
  );
};

export default Experience;