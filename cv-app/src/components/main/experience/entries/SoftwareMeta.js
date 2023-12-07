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
        <h1>Frontend Developer Professional Certificate</h1>

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
                <a href='https://github.com/Ella-Gryf/MetaFrontEndCertification.git' target="_blank">
                  viewable here
                </a>
              </li>        
            </ul> 
          </div>   

        <div className='image-container'>
            <img src={react} 
              alt="React logo" 
              className='img-radius box-shadow img-abs' 
              style={{width: "120px", top: "15px", right: "180px", zIndex: "4"}} />
            <img src={npm} 
              alt="NPM logo" 
              className='img-radius box-shadow img-abs'
              style={{width: "120px", top: "80px", right: "45px", zIndex: "2"}} />
            <img src={javascript} 
              alt="JavaScript logo" 
              className='img-radius box-shadow img-abs' 
              style={{width: "120px", top: "80px", right: "315px", zIndex: "3"}} />
              <img src={bootstrap} 
              alt="Bootstrap logo" 
              className='img-radius box-shadow img-abs'
              style={{width: "120px", top: "155px", right: "180px", zIndex: "2"}} />
          </div>
        </div> 

          <div className='text-content'>
            <h2 className='center-content'>Capstone Project <span> </span>
              <a href='https://github.com/Ella-Gryf/MetaFrontEndCertification.git' target="_blank">
                Little Lemon
              </a>
            </h2>
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