import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './homepage/Homepage';
import Experience from './homepage/Experience';
import About from './homepage/About';
import Software from './experience/Software';
import Education from './experience/Education';
import Volunteering from './experience/Volunteering';
import References from './experience/References';

import SoftwareMeta from './experience/SoftwareMeta';
import EducationMSc from './experience/EducationMSc';
import VolunteeringMentor from './experience/VolunteeringMentor';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/about' element={<About />} />
        <Route path='/software' element={<Software />} />
        <Route path='/education' element={<Education />} />
        <Route path='/volunteering' element={<Volunteering />} />
        <Route path='/references' element={<References />} />



        <Route path='/software/meta' element={<SoftwareMeta />} />

        <Route path='/education/msc' element={<EducationMSc />} />

        <Route path='/volunteering/mentor' element={<VolunteeringMentor />} />
      </Routes>
    </main>
  )
}

export default Main;