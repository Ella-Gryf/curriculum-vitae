import React from 'react';
import OverviewCard from './cards/OverviewCard';
import {referencesData} from '../../../data/experienceData';
import './Overview.css';

const References = () => {
  return (

    <div className='experience-overview references base-grid'>    
      <div className='base-container-narrow'>
        {referencesData.map((entry) => (
          <OverviewCard key={entry.url} {...entry} className='card' />
        ))}
      </div>
    </div>

  );
}

export default References;