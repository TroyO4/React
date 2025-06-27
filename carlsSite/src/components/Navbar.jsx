import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [scroller, setScroller] = useState(false);

  const linkStyle = (path) => (location.pathname === path ? 'active' : '');

  useEffect(() => {
    const handleScroll = () => {
      console.log('Scroll event fired! window.scrollY:', window.scrollY);
      setScroller(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Call handler once on mount in case page is already scrolled
    handleScroll();

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
        <Link to="/contact" className={`link ${linkStyle('/contact')}`}>
          Contact
        </Link>
        <Link to="/services" className={`link ${linkStyle('/services')}`}>
          Services
        </Link>
        <Link to="/home" className={`link ${linkStyle('/home')}`}>
          Home
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
