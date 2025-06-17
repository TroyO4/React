import React from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbarContainer">
      <div className="Home">
        <Link
          to="/home"
          className={location.pathname === '/home' ? 'active' : ''}
        >
          <h2 className="navbarText">TO</h2>
        </Link>

        <Link
          to="/about"
          className={location.pathname === '/about' ? 'active' : ''}
        >
          <h2 className="navbarText">Get to Know Me</h2>
        </Link>

        <Link
          to="/projects"
          className={location.pathname === '/project' ? 'active' : ''}
        >
          <h2 className="navbarText">My Artpieces</h2>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
