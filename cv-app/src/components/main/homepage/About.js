import React from 'react';
import './About.css';

const About = () => {

  return (
    <div className='homepage about base-grid'>
      <div className='base-container'>
        <div></div>
        <div className='content'>
          <p>
            Bio sentence. Bio sentence. Bio sentence. Bio sentence. 
            Bio sentence. Bio sentence. Bio sentence. Bio sentence. 
            Bio sentence. Bio sentence. Bio sentence. Bio sentence.
            Bio sentence. Bio sentence. Bio sentence. Bio sentence.  
          </p>
          <p>
            Bio sentence. Bio sentence. Bio sentence. Bio sentence. 
            Bio sentence. Bio sentence. Bio sentence. Bio sentence. 
            Bio sentence. Bio sentence. Bio sentence. Bio sentence. 
            Bio sentence. Bio sentence. Bio sentence. 
          </p>
          <button className='btn'>
            Download CV PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;