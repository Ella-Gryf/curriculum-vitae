import React from 'react';

import java from '../../../../assets/techicons/java.jpg';
import git from '../../../../assets/techicons/git.jpg';
import zoom from '../../../../assets/techicons/zoom.jpg';
import aws from '../../../../assets/techicons/aws.jpg';



const SoftwareIntern = () => {
  return (
    <div className='experience-entry software-entry base-grid intern'>
      <div className='base-container'>
        <h1>Summer Internship</h1>
        <h2>Goldman Sachs</h2>

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

          <div className='image-container'>
            <img src={java} 
              alt="Java logo" 
              className='img-radius-c box-shadow img-abs' 
              style={{width: "120px", top: "20px", right: "150px", zIndex: "4"}} />
            <img src={zoom} 
              alt="Zoom logo" 
              className='img-radius-c box-shadow img-abs'
              style={{width: "120px", top: "150px", right: "80px", zIndex: "2"}} />
            <img src={git} 
              alt="Git logo" 
              className='img-radius-c box-shadow img-abs' 
              style={{width: "120px", top: "150px", right: "210px", zIndex: "3"}} />
          </div>

        </div>

        
      </div>
    </div>
  )
}

export default SoftwareIntern;