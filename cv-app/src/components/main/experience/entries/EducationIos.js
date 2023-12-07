import React from 'react';

import aran from '../../../../assets/aran.jpg';
import bcDub1 from '../../../../assets/bcDub1.jpeg';
import swift from '../../../../assets/swift.jpg';


const EducationIos = () => {
  return (
    <div className='experience-entry education-entry base-grid ios'>
      <div className='base-container'>
        <h1>iOS App Development Bootcamp</h1>
        <h2>Boston College, Ireland School</h2>

        <div className='grid-row'>
          <div className='text-content'>
            <ul className='list-text space-list'>
              <li>Month-long bootcamp hosted in Boston College's Dublin branch</li>
              <li>Introduction to iOS app development using Swift</li>
              <li>
                I built a <span className='bold'> fully functional 
                marketplace-style app</span>, through which users could post,
                collect or exchange their used items. The app utilised location 
                services to show relative proxity of the user to items listen in the 
                main feed.
              </li>
              <li>
                The goal was to promote the exchange economy for the sake of environmental 
                sustainability. 
              </li>
            </ul>
          </div>

          <div className='image-container'>
            <img src={aran} 
              alt="Aran Islands" 
              className='img-radius box-shadow imageA' 
              style={{width: "400px", top: "5%", right: "0", zIndex: "0"}}/>
            <img src={bcDub1} 
              alt="Class in Dublin" 
              className='img-radius box-shadow imageB' 
              style={{width: "370px", top: "15%", right: "50%", zIndex: "1"}} />
            <img src={swift} 
              alt="Swift logo" 
              className='img-radius box-shadow imageB' 
              style={{width: "130px", top: "62%", right: "34%", zIndex: "2"}} />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default EducationIos;