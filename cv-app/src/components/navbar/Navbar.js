import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaRegTimesCircle} from 'react-icons/fa';
import "./Navbar.css";

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
    <header className="navbar">
      <h3>icons - here</h3>
      <nav role="navigation" >
        <li>
          <Link to="/" className={isActive(loc, "/")}>Home</Link>
        </li>
        <li>
          <Link to="/about" className={isActive(loc, "/about")}>About</Link>
        </li>
        <li>
          <Link to="/software" className={isActive(loc, "/software")}>Software</Link>
        </li>
        <li>
          <Link to="/education" className={isActive(loc, "/education")}>Education</Link>
        </li>
        <li>
          <Link to="/volunteering" className={isActive(loc, "/volunteering")}>Volunteering</Link>
        </li>
        <li>
          <Link to="references" className={isActive(loc, "/references")}>References</Link>
        </li>
      </nav>
      <div 
        className="hamburger" 
        role="button" 
        aria-label="Toggle Navigation Menu"
        onClick={handleClick}
      >
        {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
      </div>
    </header>
  )
}

export default Navbar;