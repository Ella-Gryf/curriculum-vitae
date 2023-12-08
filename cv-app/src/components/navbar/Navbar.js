import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { RxHamburgerMenu } from "react-icons/rx";
import {FaRegTimesCircle} from 'react-icons/fa';
import "./Navbar.css";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: ellagryflow@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Ella-Gryf/curriculum-vitae.git",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/ella-gryf-lowczowska/", 
  },
];

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const loc = useLocation();

  const isActive = (location, path) => {
    if (location.pathname === path) {
      return 'active-loc';
    } else {
      return null;
    }
  }

  return (
    <header className="navbar base-grid">
      <div className='base-container'>
        <nav id="socials">
          {socials.map(({icon, url}) => (
            <a key={url} href={url} icon={icon} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={icon} size="2x" />
            </a>
          ))}
        </nav>
        <nav role="navigation" id="site-links">
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
              <Link to="/" className={`${isActive(loc, "/")} li`}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={`${isActive(loc, "/about")} li`}>About</Link>
            </li>
            <li>
              <Link to="/software" className={`${isActive(loc, "/software")} li`}>Software</Link>
            </li>
            <li>
              <Link to="/education" className={`${isActive(loc, "/education")} li`}>Education</Link>
            </li>
            <li>
              <Link to="/volunteering" className={`${isActive(loc, "/volunteering")} li`}>Volunteering</Link>
            </li>
            <li>
              <Link to="/references" className={`${isActive(loc, "/references")} li`}>References</Link>
            </li>
          </ul>
        </nav>
        <div 
          className="hamburger" 
          role="button" 
          aria-label="Toggle Navigation Menu"
          onClick={handleClick}
        >
          {click ? (<FaRegTimesCircle className='icon' />) : (<RxHamburgerMenu className='icon' />)}
        </div>
      </div>
    </header>
  )
}

export default Navbar;