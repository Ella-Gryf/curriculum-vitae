import React from 'react';

import java from '../../../../assets/techicons/java.jpg';
import git from '../../../../assets/techicons/git.jpg';
import zoom from '../../../../assets/techicons/zoom.jpg';
import postman from '../../../../assets/techicons/postman.jpg';


const SoftwareIntern = () => {
  return (
    <div className='experience-entry software-entry base-grid intern'>
      <div className='base-container'>
        <h1 className='center-content'>Summer Internship</h1>
        <h2 className='center-content'>Goldman Sachs</h2>

        <div className='grid-row-left'>
          <div className='text-content'>
            <h2>Internship</h2>
            <p>
              Due to Covid, the internship programme was entirely remote
              for everyone. I and the other intern in my team together
              built an inventory feed to report on the state of users'
              active decision models on the platform. We achieved this by querying 
              the platform APIs to retrieve the metadata attached to each decision model.
            </p>

          </div>

          <div className='logo-container'>
            <div className='logo-container-top'>
              <div>
                <img src={java} 
                  alt="Java logo" 
                  className='img-radius-c box-shadow logo' />
                <img src={git} 
                  alt="Git logo" 
                  className='img-radius-c box-shadow logo' />
              </div>
            </div>
            <div className='logo-container-bottom'>
              <div>
                <img src={postman} 
                  alt="Postman logo" 
                  className='img-radius-c box-shadow logo' />
                <img src={zoom} 
                  alt="Zoom logo" 
                  className='img-radius-c box-shadow logo' />
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default SoftwareIntern;