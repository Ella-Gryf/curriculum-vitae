import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundDown } from "react-icons/io";
import './Hero.css';


import microchip from '../../../assets/freepik/microchip.mp4';

const Hero = () => {
  return (
    <div className='hero'>
      <video src={microchip} className='video-sixty'
        autoPlay 
        loop 
        muted 
      />
      <div className='base-grid'>
        <div className='base-container'>
          <div>
            <h1>SOFTWARE DEVELOPER</h1>
            <h2>ELLA GRYF-LOWCZOWSKA</h2>
          </div>
          <nav>
            <Link to='/experience' className='link icon' id='experience'>
              EXPERIENCE {<IoIosArrowRoundDown className='arrow' />}
            </Link>
            <Link to="/about" className='link icon' id='about'>
              ABOUT {<IoIosArrowRoundDown className='arrow' />}
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Hero;