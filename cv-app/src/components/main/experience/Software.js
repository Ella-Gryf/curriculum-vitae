import React from 'react';
import OverviewCard from './cards/OverviewCard';
import {softwareData} from '../../../data/experienceData';

import './Overview.css';

const Software = () => {

  return (
    <div className='experience-overview software base-grid'>
      
      <div className='base-container-narrow'>
        {softwareData.map((entry) => (
          <OverviewCard key={entry.url} {...entry} className='card' />
        ))}
      </div>
    </div>
  );
};

export default Software;