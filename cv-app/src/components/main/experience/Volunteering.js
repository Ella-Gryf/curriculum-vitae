import React from 'react';
import OverviewCard from './cards/OverviewCard';
import {volunteeringData} from '../../../data/experienceData';
import './Overview.css';

const Volunteering = () => {

  return (

    <div className='experience-overview volunteering base-grid'>
      
      <div className='base-container-narrow'>
        {volunteeringData.map((entry) => (
          <OverviewCard key={`${entry.url}-${entry.title}`} {...entry} className='card' />
        ))}

      </div>
    </div>

  );
};

export default Volunteering;

