import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [scroller, setScroller] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // NEW STATE

  const linkStyle = (path) => (location.pathname === path ? 'active' : '');

  useEffect(() => {
    const handleScroll = () => {
      setScroller(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbarContainer ${scroller ? 'scrolled' : ''}`}>
      {/* Logo */}
      <Link
        to="/"
        className={`logo ${linkStyle('/home')} ${scroller ? 'scrolled' : ''}`}
      >
        <img className="logo2" src="/images/Logo2.png" alt="Logo" />
      </Link>

      {/* Burger icon */}
      <div
        className={`burger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div />
        <div />
        <div />
      </div>

      {/* Nav links */}
      <div className={`outerLinks ${menuOpen ? 'showMenu' : ''}`}>
        <Link
          to="/about"
          className={`link about ${linkStyle('/about')}`}
          onClick={() => setMenuOpen(false)}
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className={`link contact ${linkStyle('/contact')}`}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
        <Link
          to="/services"
          className={`link services ${linkStyle('/services')}`}
          onClick={() => setMenuOpen(false)}
        >
          Services
        </Link>
        <Link
          to="/"
          className={`link home ${linkStyle('/')}`}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
