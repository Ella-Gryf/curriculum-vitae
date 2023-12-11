import React from 'react';

import aran from '../../../../assets/aran.jpg';
import bcDub1 from '../../../../assets/bcDub1.jpeg';
import swift from '../../../../assets/swift.jpg';


const EducationIos = () => {
  return (
    <div className='experience-entry education-entry base-grid' id='ios'>
      <div className='base-container'>
        <h1 className='center-content'>iOS App Development Bootcamp</h1>
        <h2 className='center-content'>Boston College, Ireland School</h2>

        <div className='grid-row'>
          <div className='text-content'>
            <ul className='list-text space-list'>
              <li>Month-long bootcamp hosted in Boston College's Dublin branch</li>
              <li>Introduction to iOS app development using Swift</li>
              <li>
                I built a <span className='bold'> fully functional 
                marketplace-style app</span>, through which users could post,
                collect or exchange their used items. The app utilised location 
                services to show relative proximity of the user to items listed 
                in the main feed. Users could 'heart' the item to save it for later,
                message the lister directly, and/or 'claim' the item to remove it 
                from the feed before setting out to pick it up. 
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
              className='img-radius box-shadow img-abs' 
              id='ios-imgA' />
            <img src={bcDub1} 
              alt="Class in Dublin" 
              className='img-radius box-shadow img-abs' 
              id='ios-imgB' />
            <img src={swift} 
              alt="Swift logo" 
              className='img-radius box-shadow img-abs' 
              id='ios-imgC' />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default EducationIos;