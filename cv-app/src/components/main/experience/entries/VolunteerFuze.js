import React from 'react';
import './ExperienceEntries.css';

import darnell from '../../../../assets/fuze/darnell.jpg';
import sofa2 from '../../../../assets/fuze/sofa2.jpg';
import laroc from '../../../../assets/fuze/laroc.jpg';
import titus from '../../../../assets/fuze/titus.jpg';
import sophieshow1 from '../../../../assets/fuze/sophieshow1.jpg';
import dextra from '../../../../assets/fuze/dextra.jpg';
import eve from '../../../../assets/fuze/eve.jpg';
import aliceshow from '../../../../assets/fuze/alice_show.jpg';
import alice_2 from '../../../../assets/fuze/alice_2.jpg';


const VolunteerFuze = () => {

  return (
    <div className='experience-entry volunteering-entry base-grid' id='fuze'>
      <div className='base-container'>
        <h1 className='center-content'>Charity Director & ELA Officer</h1>

        <div className='row'>
          <div className='text-content'>
            <h2>About FUZE</h2>
            <p>FUZE is a volunteer-led community interest company (CIC) whose purpose is twofold. 
               As a creative organisation FUZE provides professional performance opportunities to young people,
               culminating in an annual music, fashion and dance show held in the summer. 
               Simultaneously, FUZE raises money for charity through ticket 
               sales from the final show and other fundraising initiatives throughout the year.                 
            </p>     
          </div>
          <img src={darnell} alt="FUZE show" className='wide-page-img img-radius box-shadow' /> 
        </div>

        <div className='row'>
          <img src={sofa2} alt="FUZE musicians" className='tall-page-img box-shadow img-radius' />
          <div className='text-content'>
            <h2>Charity Director</h2>
            <p>
              I sourced suitable, local charities for our committee to vote on, I was the liason 
              between the charities and our committee, and I organised fundraising events throughout
              both years. I also worked with the rest of the committee to ensure
              the material we were creating to promote the charities was in line with the charities'
              respective brands and core values.
            </p>
            <p>
              At the end of my two-year tenure FUZE had  
              <span className="bold"> raised £28,000</span> for: homelessness charity 
              <span className='italic'> Second Step</span>, racial justice charity 
              <span className='italic'> Black South West Network</span>, and 
              <span className='italic'> Art Refuge</span> who support refugees through art therapy. 
            </p>
          </div>          
        </div>

        <div className='row'>
          <div className='text-content'>
            <h2>Equality, Liberation & Access Officer</h2>
            <p>
              The countless measures we took to ensure diversity of cast, crew and committee, and to make FUZE
              a safe space for all from our private zooms to our final show, were all a group effort that 
              succeeded thanks to the unity and enthusiasm of the entire committee. 
            </p>
            <p>
              As the ELA officer, the 
              change I am most proud of myself is being instrumental in opening up committee positions to a 
              far broader range of people from outside the University including many whom we reached through 
              our relationships with the charities. This really transformed FUZE from a student society to a 
              community in its own right.   
            </p>
            <p>
              During my tenure, the Bright Network chose FUZE as the first place winners of their 
              <span className='bold'> annual award for diversity and inclusion</span> out of all
              UK societies and student-led organisations. 
            </p>
          </div>
          <img src={titus} alt="FUZE show" className='tall-page-img box-shadow img-radius' />
        </div>

        <div className='row' id='fuze-link'>
          <h2 className='italic'>See the <a href="https://fuzeuk.org/" target="_blank" rel="noreferrer">
            FUZE website </a>
          for more</h2>
        </div>
      </div>

      <div className='image-reel'>
        <img src={sophieshow1} alt="FUZE show" className='wide-img' />
        <img src={dextra} alt="FUZE show" className='tall-img' />
        <img src={eve} alt="FUZE show" className='wide-img' />
        <img src={aliceshow} alt="FUZE show" className='tall-img' />
        <img src={alice_2} alt="FUZE show" className='wide-img' />
        <img src={laroc} alt="FUZE show" className='tall-img' />
      </div>
    </div>
  );
};

export default VolunteerFuze;