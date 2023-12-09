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

var settings = {
  accessibility: true,
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: true,
  variableWidth: true,
  prevArrow: <CustomPrevArrow />, 
  nextArrow: <CustomNextArrow />,

  responsive: [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    }
    ]
  };

  return (
    <div className='homepage experience base-grid'>
      <div className='base-container'>

        <Slider {...settings}>
          {data.map((dataEntry) => (
            <Card key={`${dataEntry.url}-${dataEntry.title}`} {...dataEntry} />
          ))}
        </Slider>
        <div id='scroll-instruction'><TbHandFinger /><h3>DRAG TO SCROLL</h3></div>

      </div>
    </div>
  );
};

export default Experience;