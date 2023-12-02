import React from 'react';
import { Link } from 'react-router-dom';
import warsaw1 from '../../../assets/warsaw1.jpeg';
import warsaw3 from '../../../assets/warsaw3.jpeg';
import warsaw4 from '../../../assets/warsaw4.jpeg';
import wfh from '../../../assets/wfh.jpg';

import './Overview.css';

const Software = () => {
  return (
    <div className='experience-overview software base-grid'>
      <div className='base-container-narrow'>

        <h1>Software Development</h1>

        <div className='row' id='gs-analyst'>
          <div className='col-text left'>
          <h2>Analyst</h2>
          <h3>Core Engineering</h3>
          <h3>Goldman Sachs, Warsaw</h3>
          <h4>January 2022 - February 2023</h4>
          <button className='btn'>
            <Link to='/software/analyst' className='btn link'>See Experience</Link>
          </button>
          </div>
          <div className='col-img right'>
            <img src={warsaw1} alt='Warsaw' className='img-lrg' />
          </div>
        </div>

        <div className='row' id='gs-intern'>
          <div className='col-img left'>
            <img src={wfh} alt='Working from home' className='img-lrg' />
          </div>
          <div className='col-text right'>
          <h2>Internship</h2>
          <h3>Core Engineering</h3>
          <h3>Goldman Sachs, Warsaw</h3>
          <h4>July - August 2020</h4>
          <button className='btn'>
            <Link to='/software/intern' className='btn link'>See Experience</Link>
          </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Software;