import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [hover, setHover] = useState(false);

  const linkStyle = (path) => (location.pathname === path ? 'active' : '');

  useEffect(() => {
    const handleScroll = () => {
      // You can adjust this threshold to your liking
      if (window.scrollY > 5) {
        setHover(true);
      } else {
        setHover(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="navbarContainer"
      style={{
        position: 'relative',
        opacity: 1,
        backdropFilter: 'blur(5px)',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Gradient background overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hover ? 1 : 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'radial-gradient(circle, rgba(0,169,207,1) 0%, rgba(0,169,207,0.4) 60%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <Link to="/home" className={`link1 ${linkStyle('/home')}`}>
        Troy O'Connor
      </Link>

      <div className="centerLinks">
        <Link
          to="/about"
          className={`link ${linkStyle('/about')}`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Get to Know Me
        </Link>
        <Link
          to="/projects"
          className={`link ${linkStyle('/projects')}`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          My Artpieces
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
