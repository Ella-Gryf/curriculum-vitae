import React from 'react';
import './ExperienceEntries.css';
import comp1 from '../../../../assets/comp1.jpg';


const EducationMSc = () => {
  return (
    <div className='experience-entry education-entry base-grid' id='msc'>
      <div className='base-container'>

        <h1>MSc Computer Science</h1>
        <h2>University of Bristol</h2>
        <h2>Grade: Distinction</h2>

        <div className='row'>
          <div className='text-content'>
            <h2>Overview</h2>
            <p>
              Taught conversion Masters with units covering: 
            </p>
            <div>
              <ul className='list-text indent-left'>
                <li>C programming</li>
                <li>Java programming</li>
                <li>Computer architecture</li>
                <li>Datavase management SQL</li>
                <li>Web development group project {`(Angular & Typescript)`}</li>
              </ul>
            </div>
          </div>
          <img 
            src={comp1} 
            alt="computer cartoon" 
            style={{width: "450px"}}
            className='img-radius box-shadow' />
        </div> 
      
        <div className='grid-row'>
          <div className='text-content'>
            <h2>Dissertation</h2>
            <p>
              Researching in the field of computational neuroscience, I developed a deep 
              learning algorithm called a Long Short-Term Memor {`(LSTM)`} network. Using 
              Esperanto as my test case, I investigated the LSTM's grammatical encoding
              abilities by measuring its performance on an Esperanto affix-prediction task
              against that of a human control group.
            </p>
            <p>
            See the dissertation <span></span>
            <a href='https://github.com/Ella-Gryf/msc-dissertation.git' 
              target='_blank' 
              rel="noreferrer">
                here
            </a>
          </p>
          </div>

          <div className='text-content'>
            <h3>Technologies & Libraries</h3>
            <ul className='list-text indent-left'>
              <li>Python</li>
              <li>PyTorch, NumPy, Pickle, MatPlotLib</li>
              <li>High performance computing cluster</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationMSc;