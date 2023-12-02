import React from 'react';
import { Link } from 'react-router-dom';
import ws3 from '../../../assets/waterstones3.jpeg';
import library from '../../../assets/library1.jpg';
import './Overview.css';

const Education = () => {
  return (
    <div className='experience-overview education base-grid'>
      <div className='base-container-narrow'>
        <h1>Education</h1>

        <div className='row' id='msc'>
          <div className='col-text left'>
          <h2>MSc Computer Science</h2>
          <h3>University of Bristol</h3>
          <h4>September 2020 - January 2022</h4>
          <button className='btn'>
            <Link to='/education/msc' className='btn link'>See Experience</Link>
          </button>
          </div>
          <div className='col-img right'>
            <img src={ws3} alt='Student' className='img-lrg' />
          </div>
        </div>


        <div className='row' id='ma'>
          <div className='col-img left'>
            <img src={library} alt='Library' className='img-lrg' />
          </div>
          <div className='col-text right'>
          <h2>MA Liberal Arts</h2>
          <h3>University of Bristol</h3>
          <h4>September 2016 - September 2020</h4>
          <button className='btn'>
            <Link to='/education/ma' className='btn link'>See Experience</Link>
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education;