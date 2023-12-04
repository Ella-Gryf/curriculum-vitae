import React from 'react';
import OverviewCard from './cards/OverviewCard';
import {educationData} from '../../../data/experienceData';
import './Overview.css';

const Education = () => {

  return (
    <div className='experience-overview education base-grid'>
      <div className='base-container-narrow'>
        {educationData.map((entry) => (
          <OverviewCard key={entry.url} {...entry} className='card' />
        ))}
      </div>
    </div>
  );
};

export default Education;