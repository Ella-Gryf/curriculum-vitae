import React from 'react';
import CV from '../../../assets/Ella_CV.pdf';
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

          <a href={CV} download="EllaCV" target="_blank">
            <button className='btn'>Download CV.pdf</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;