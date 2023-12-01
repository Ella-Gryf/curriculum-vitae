import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './homepage/Homepage';
import About from './homepage/About';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </main>
  )
}

export default Main;