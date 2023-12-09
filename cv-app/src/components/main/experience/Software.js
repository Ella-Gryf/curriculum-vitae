import React, {useState, useEffect} from 'react';
import OverviewCard from './cards/OverviewCard';
import {softwareData} from '../../../data/experienceData';
import { FaHandPointDown } from "react-icons/fa";
import './Overview.css';

const Software = () => {

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className='experience-overview software base-grid'>
      {viewportWidth >= 1000 ? (
        <div className='scroll-down'>
          <h3 className='scroll-instruction'>More</h3>
          <FaHandPointDown className='scroll-icon'/>
        </div>
      ) : null}
      <div className='base-container-narrow'>
        {softwareData.map((entry) => (
          <OverviewCard key={entry.url} {...entry} className='card' />
        ))}
      </div>
    </div>
  );
};

export default Software;