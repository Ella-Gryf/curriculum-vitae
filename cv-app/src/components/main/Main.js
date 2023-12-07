import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './homepage/Homepage';
import Experience from './homepage/Experience';
import About from './homepage/About';
import Software from './experience/Software';
import Education from './experience/Education';
import Volunteering from './experience/Volunteering';
import References from './experience/References';

import SoftwareMeta from './experience/entries/SoftwareMeta';
import SoftwareAnalyst from './experience/entries/SoftwareAnalyst';
import SoftwareIntern from './experience/entries/SoftwareIntern';

import EducationMSc from './experience/entries/EducationMSc';
import EducationMA from './experience/entries/EducationMA';
import EducationBC from './experience/entries/EducationBC';
import EducationIos from './experience/entries/EducationIos';

import VolunteerMentor from './experience/entries/VolunteerMentor';
import VolunteerFuze from './experience/entries/VolunteerFuze';
import VolunteerStar from './experience/entries/VolunteerStar';

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
        <Route path='/software/analyst' element={<SoftwareAnalyst />} />
        <Route path='/software/intern' element={<SoftwareIntern />} />

        <Route path='/education/msc' element={<EducationMSc />} />
        <Route path='/education/ma' element={<EducationMA />} />
        <Route path='/education/bc' element={<EducationBC />} />
        <Route path='/education/ios' element={<EducationIos />} />

        <Route path='/volunteer/mentor' element={<VolunteerMentor />} />
        <Route path='/volunteer/fuze' element={<VolunteerFuze />} />
        <Route path='/volunteer/star' element={<VolunteerStar />} />
      </Routes>
    </main>
  )
}

export default Main;