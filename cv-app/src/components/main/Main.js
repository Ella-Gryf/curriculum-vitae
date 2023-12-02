import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './homepage/Homepage';
import Experience from './homepage/Experience';
import About from './homepage/About';
import Software from './experience/Software';
import Education from './experience/Education';
import Volunteering from './experience/Volunteering';
import References from './experience/References';

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
      </Routes>
    </main>
  )
}

export default Main;