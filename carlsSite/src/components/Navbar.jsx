import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [scroller, setScroller] = useState(false);

  const linkStyle = (path) => (location.pathname === path ? 'active' : '');

  useEffect(() => {
    const handleScroll = () => {
      setScroller(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbarContainer ${scroller ? 'scrolled' : ''}`}>
      <Link
        to="/"
        className={`logo ${linkStyle('/home')} ${scroller ? 'scrolled' : ''}`}
      >
        <img className="logo2" src="/images/Logo2.png" alt="Logo" />
      </Link>

      <div className="outerLinks">
        <Link to="/about" className={`link ${linkStyle('/about')}`}>
          About Us
        </Link>
        <Link to="/contact" className={`link ${linkStyle('/projects')}`}>
          Contact
        </Link>
        <Link to="/services" className={`link ${linkStyle('/services')}`}>
          Services
        </Link>
        <Link to="/" className={`link ${linkStyle('/')}`}>
          Home
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
