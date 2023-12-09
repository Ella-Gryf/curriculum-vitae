import React from 'react';
import bc1 from '../../../../assets/bc1.jpg';
import eagles from '../../../../assets/eagles.jpg';


const EducationBC = () => {
  return (
    <div className='experience-entry education-entry base-grid' id='bc'>
      <div className='base-container'>
        <h1 className='center-content'>Year Abroad</h1>
        <h2 className='center-content'>Boston College, Massachusetts</h2>
        
        <div className='grid-row'>
          <div className='text-content'>
            <h2>Subjects</h2>
            <ul className='list-text indent-left'>
              <li>Symbolic Logic, <span className='italic'>PhD-level</span></li>
              <li>Advanced Existentialism, <span className='italic'>PhD-level</span></li>
              <li>Phenomenology, <span className='italic'>PhD-level</span></li>
              <li>Philosophy of Language, <span className='italic'>PhD-level</span></li>
              <li>Black Philosophy</li>
              <li>Computer Science, Python</li>
              <li>Irish Politics</li>
              <li>Financial Accounting</li>
            </ul>
            <h3>Extracurricular</h3>
            <p>
              I was Managing Editor of the college's undergraduate Philosophy journal,
              <span className='italic'> Dianoia</span>.
            </p>
          </div>

          <div className='image-container'>
            <img src={bc1} 
              alt="Boston College Campus" 
              className='img-radius box-shadow img-abs'
              id='bc-imgA' />
            <img src={eagles} 
              alt="Boston Sport" 
              className='img-radius box-shadow img-abs'
              id='bc-imgB' />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default EducationBC;