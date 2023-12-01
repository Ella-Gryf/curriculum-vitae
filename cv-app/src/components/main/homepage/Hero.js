import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundDown } from "react-icons/io";
import './Hero.css';

const Hero = () => {

  return (
    <div className='homepage hero base-grid'>
      <div className='base-container'>
        <h1>SOFTWARE DEVELOPER</h1>
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
  );
};

export default Hero;