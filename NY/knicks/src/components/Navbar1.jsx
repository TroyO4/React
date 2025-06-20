import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current path

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      {/* Background Video */}
      <video autoPlay loop muted className="video">
        <source src="/images/knicksVid.mp4" type="video/mp4" />
      </video>

      {/* Burger Menu Icon */}
      <div className={`burger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        ☰
      </div>

      {/* Navigation Menu */}
      <div className={`menu ${isOpen ? 'show' : ''}`}>
        <Link
          to="/home"
          className={location.pathname === '/home' ? 'active' : ''}
        >
          <h2 className="navbarText">New York Knicks</h2>
        </Link>
        <Link
          to="/schedule"
          className={location.pathname === '/schedule' ? 'active' : ''}
        >
          <h2 className="navbarText">Schedule</h2>
        </Link>
        <Link
          to="/standings"
          className={location.pathname === '/standings' ? 'active' : ''}
        >
          <h2 className="navbarText">Standings</h2>
        </Link>
        <Link
          to="/stats"
          className={location.pathname === '/stats' ? 'active' : ''}
        >
          <h2 className="navbarText">Stats</h2>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
