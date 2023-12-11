import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundDown } from "react-icons/io";
import './Hero.css';

const Hero = () => {
  return (
    <div className='homepage hero'>

    <div className="fullscreen-video-wrap" dangerouslySetInnerHTML={{ __html: `
      <video playsinline loop autoPlay muted autobuffer poster="../../../assets/freepik/backuphero.jpg">
        <source src="${require('../../../assets/freepik/microchip.mp4')}" type="video/mp4" />
        <img src="${require('../../../assets/freepik/backuphero.jpg')}" alt=""/>
      </video>            
    ` }}></div>
    
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