import './Home.css';
import { Link } from 'react-router-dom'; // ✅ Add this

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="title">
        <h1>Web Developer</h1>
        <h3>
          Take a look at my personal site and check out some of my other
          projects{' '}
          <Link to="/projects" className="link">
            here
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Home;
