import React from 'react';
import './ExperienceEntries.css';

const VolunteerMentor = () => {
  return (
    <div className='experience-entry volunteering-entry base-grid' id='mentor'>
      <div className='base-container-narrow'> 
        <h1 className='center-content'>Mentor to Participant on CFG's Nano-Degree</h1>    


          <h2>Code First Girls Nano Degree with Goldman Sachs</h2>
          <p>
            In 2022, Code First Girls {`(CFG)`} partnered with Goldman Sachs to provide a 
            twelve-week 'nano degree' designed to equip participants with technical skills
            and industry insights. I happened to be working for Goldman at the time, and I 
            was thrilled to have the opportunity to mentor a participant on the Software 
            Engineering pathway. 
          </p>


          <h2>Mentorship</h2>
          <p>
            I had the pleasure of mentoring a very hardworking lady named Malgorzata. As Malgorzata 
            was taking the course remotely we met weekly over zoom and corresponded via email in between.
            For me the best thing was seeing how much Malgorzata grew in confidence over the course of the
            programme.
          </p>
          <h3>Microservices and APIs</h3>
          <p>
            The nano-degree syllabus included an overview of APIs and microservices. As the team I worked 
            with maintained a microservices-based web service that heavily relied upon RESTful APIs, I was able to 
            demonstrate what microservices and use of APIs looks like in industry by walking my mentee 
            through parts of our codebase. 
          </p>
          <h3>Object Oriented Programming & Algorithm Design with Python</h3>
          <p>
            Having used Python and associated libraries to write a deep neural network for my MSc dissertation, 
            I was well-placed to provide programming support to my mentee. We would discuss the take-home programming 
            assignments over zoom and I would share various blogs and YouTube videos that I myself have found helpful
            over the years.
          </p>

      </div>
    </div>
  );
};

export default VolunteerMentor;