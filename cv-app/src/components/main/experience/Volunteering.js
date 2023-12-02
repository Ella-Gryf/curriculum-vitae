import React from 'react';
import { Link } from 'react-router-dom';
import cfg from '../../../assets/cfg.jpg';
import fuzeC from '../../../assets/fuze/laroc.jpg';
import fuzeEla from '../../../assets/fuze/titus.jpg';
import teacher from '../../../assets/teacher.jpg';
import './Overview.css';

const Volunteering = () => {
  return (
    <div className='experience-overview volunteering base-grid'>
      <div className='base-container-narrow'>
        <h1>Volunteering</h1>

        <div className='row' id='mentor'>
          <div className='col-text left'>
          <h2>Mentor</h2>
          <h3>Code First Girls X Goldman Sachs</h3>
          <h4>September - November 2022</h4>
          <button className='btn'>
            <Link to='/volunteering/mentor' className='btn link'>See Experience</Link>
          </button>
          </div>
          <div className='col-img right'>
            <img src={cfg} alt='Code First Girls logo' className='img-small' />
          </div>
        </div>


        <div className='row' id='fuze-charity'>
          <div className='col-img left'>
            <img src={fuzeC} alt='FUZE show' className='img-lrg' />
          </div>
          <div className='col-text right'>
          <h2>Charity Director</h2>
          <h3>FUZE Bristol</h3>
          <h4>September 2020 - August 2022</h4>
          <button className='btn'>
            <Link to='/volunteering/charity' className='btn link'>See Experience</Link>
          </button>
          </div>
        </div>


        <div className='row' id='fuze-ela'>
          <div className='col-text left'>
          <h2>Equality, Liberation & Access Officer</h2>
          <h3>FUZE Bristol</h3>
          <h4>September 2021 - August 2022</h4>
          <button className='btn'>
            <Link to='/volunteering/ela' className='btn link'>See Experience</Link>
          </button>
          </div>
          <div className='col-img right'>
            <img src={fuzeEla} alt='FUZE show' className='img-lrg' />
          </div>
        </div>


        <div className='row' id='star'>
          <div className='col-img left'>
            <img src={teacher} alt='Student Action for Refugees logo' className='img-small' />
          </div>
          <div className='col-text right'>
          <h2>Student Action for Refugees</h2>
          <h3>Bristol</h3>
          <h4>September 2016 - June 2017</h4>
          <button className='btn'>
            <Link to='/volunteering/star' className='btn link'>See Experience</Link>
          </button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Volunteering;