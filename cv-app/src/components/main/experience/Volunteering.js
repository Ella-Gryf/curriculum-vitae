import React, {useState, useEffect} from 'react';
import OverviewCard from './cards/OverviewCard';
import {volunteeringData} from '../../../data/experienceData';
import { FaHandPointDown } from "react-icons/fa";
import './Overview.css';

const Volunteering = () => {

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {

    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener 
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (

    <div className='experience-overview volunteering base-grid'>

      {viewportWidth >= 1000 ? (
        <div className='scroll-down'>
          <h3 className='scroll-instruction'>More</h3>
          <FaHandPointDown className='scroll-icon'/>
        </div>
      ) : null}
      <div className='base-container-narrow'>
        {volunteeringData.map((entry) => (
          <OverviewCard key={`${entry.url}-${entry.title}`} {...entry} className='card' />
        ))}

      </div>
    </div>

  );
};

export default Volunteering;

