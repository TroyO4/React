import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const linkStyle = (path) => (location.pathname === path ? 'active' : '');

  return (
    <nav className="navbarContainer">
      <Link to="/" className={`logo ${linkStyle('/home')}`}>
        <img src="/images/Logo2.png" />
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
          Services
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
