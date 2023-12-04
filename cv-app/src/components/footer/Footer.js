import React from 'react';
import { Link } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";
import './Footer.css';

import CV from '../../assets/Ella_CV.pdf';


const Footer = () => {
  return (
    <footer className='footer base-grid'>
      <div className='base-container'>
        
        <div className='col'>
          <h3>Navigate</h3>
          <nav role='navigation'>
            <ul>
              <li><Link to="/" className='li'>Home</Link></li>
              <li><Link to="/about" className='li'>About</Link></li>
              <li><Link to="/software" className='li'>Software</Link></li>
              <li><Link to="/education" className='li'>Education</Link></li>
              <li><Link to="/volunteering" className='li'>Volunteering</Link></li>
              <li><Link to="/references" className='li'>References</Link></li>
            </ul>
          </nav>
        </div>

        <div className='col'>
          <h3>Contact</h3>
          <p>+447546347023</p>
          <p>ellagryflow@gmail.com</p>
          <p>5 The Grove</p>
          <p>Huntingdon</p>
          <p>PE29 1YD</p>
        </div>

        <div className='col'>
          <h3>Channels</h3>
          <nav>
            <ul>
              <li><a key={'linkedin'} href={'https://www.linkedin.com/in/ella-gryf-lowczowska/'}>LinkedIn</a></li>
              <li><a key={'git'} href={'https://github.com/Ella-Gryf/curriculum-vitae.git'}>Git</a></li>
            </ul>
          </nav>
        </div>

        <div className='col centre-align'>
          <h3>Downloadable PDF</h3>
          <a href={CV} download="EllaCV" target="_blank">
            <button className='btn'><FaDownload /></button>
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;