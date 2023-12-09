import React from 'react';
import './ExperienceEntries.css';

const EducationMA = () => {

  return (
    <div className='experience-entry education-entry base-grid ma' id='ma'>
      <div className='base-container'>
        <h1 className='center-content'>MA Liberal Arts</h1>
        <h2 className='center-content'>Major in Philosophy & Logic</h2>
        <h3 className='center-content'>Grade: First Class</h3>

        <div className='grid-row'>
          <div className='text-content'>
            <h2>Overview</h2>
            <p>
              Four-year integrated Master's degree with the third year spent studying 
              abroud in Boston. I <span className='bold'>majored in 
              Philosophy and Logic</span> and also took units in: Spanish, English literature,
              history, Irish politics, accounting, computer science and physics. 
            </p>
            <p>
              In my third year I studied PhD-level Existentialism, Phenomenology and Symbolic Logic. 
              In my final year I focused on probability theory, ethics, philosophy in the digital age 
              and the philosophy of quantum mechanism and special relativity. 
            </p>
            <h3>Dissertation</h3>
            <p>
              I drew from political philosophy, ethics and psychoanalysis to analyse human rights 
              and moral disengagement in the context of climate change, receiving a high First grade. 
            </p>
          </div>

          <div className='text-content'>
            <h3>Benefits to Software Development</h3>
            <p>              
              Even though I am now a software developer, I believe that this broad, interdisciplinary
              foundation greatly benefits my career in tech. It has given me a highly diverse skill set, 
              taught me adaptability, communication and collaboration skills, and problem-solving skills as 
              applied outside of coding. 
            </p>
            <p>
              The multiple units I took in <span className='bold'>ethics and value theory</span> have taught me how to apply ethical 
              frameworks to problems in society, which will become increasingly relevent to tech workers as A.I. 
              advances.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationMA;