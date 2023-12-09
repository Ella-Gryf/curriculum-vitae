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
          <h2>Navigate</h2>
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
          <h2>Contact</h2>
          <p>+447546347023</p>
          <p>ellagryflow@gmail.com</p>
          <p>5 The Grove</p>
          <p>Huntingdon</p>
          <p>PE29 1YD</p>
        </div>

        <div className='col'>
          <h2>Channels</h2>
          <nav>
            <ul>
              <li>
                <a 
                  key={'linkedin'} 
                  href={'https://www.linkedin.com/in/ella-gryf-lowczowska/'} 
                  target="_blank" 
                  rel="noreferrer">
                    LinkedIn
                </a>
              </li>
              <li>
                <a 
                  key={'git'} 
                  href={'https://github.com/Ella-Gryf/curriculum-vitae.git'} 
                  target="_blank" 
                  rel="noreferrer">
                    Git
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className='col centre-align'>
          <h2>Downloadable PDF</h2>
          <a href={CV} download="EllaCV" target="_blank" rel="noreferrer">
            <button className='btn'><FaDownload /></button>
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;