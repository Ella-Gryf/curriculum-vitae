import React from 'react';
import './ExperienceEntries.css';
import littlelemon1 from '../../../../assets/littlelemon1.jpg';
import littlelemon2 from '../../../../assets/littlelemon2.jpg';

import react from '../../../../assets/techicons/react.jpg';
import javascript from '../../../../assets/techicons/javascript.jpg';
import npm from '../../../../assets/techicons/npm.jpg';
import bootstrap from '../../../../assets/techicons/bootstrap.jpg';


const SoftwareMeta = () => {
  return (
    <div className='experience-entry software-entry base-grid meta' id='meta'>
      <div className='base-container-narrow'>

        <h1 className='center-content'>Frontend Developer Professional Certificate</h1>

        <div className='grid-row'>
          <div className='text-content'>
            <h2>Skills</h2>
            <ul className='list-text indent-left'>
              <li>React.js</li>    
              <li>JavaScript</li>
              <li>HTML, CSS, responsive design</li> 
              <li>Principles of UX/UI design, Figma</li> 
              <li>Bootstrap CSS Framework, Chakra UI</li>
              <li>Capstone Project <span> </span> 
                <a href='https://github.com/Ella-Gryf/MetaFrontEndCertification.git' 
                  target="_blank" 
                  rel="noreferrer">
                  viewable here
                </a>
              </li>        
            </ul> 
          </div>   

          <div className='logo-container'>
            <div className='logo-container-top'>
              <div>
                <img src={react} 
                  alt="React logo" 
                  className='img-radius-c box-shadow logo' />
                <img src={npm} 
                  alt="NPM logo" 
                  className='img-radius-c box-shadow logo' />
              </div>
            </div>
            <div className='logo-container-bottom'>
              <div>
                <img src={javascript} 
                  alt="JavaScript logo" 
                  className='img-radius-c box-shadow logo' />
                <img src={bootstrap} 
                  alt="Bootstrap logo" 
                  className='img-radius-c box-shadow logo' />
              </div>
            </div>
          </div>
        </div> 

        <h2 className='center-content'>Capstone Project Little Lemon</h2>
        <div>
          <p className='repo-link italic center-content'>See the<span> </span>
            <a href='https://github.com/Ella-Gryf/MetaFrontEndCertification.git' target="_blank" rel="noreferrer">
              Git Repo
            </a>
          </p>
          
          <div className='center-content top'>
            <img src={littlelemon1} alt="Little Lemon reservation form" className='capstone-img' />
            <img src={littlelemon2} alt="Little Lemon reservation form" className='capstone-img' />
          </div>          
        </div>
        
      </div>          
    </div>
  );
};

export default SoftwareMeta;