import './Home.css';
import React, { useEffect } from 'react';

const Home = () => {
  // Your existing IntersectionObserver scroll animations stay here
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll(
      '.fade-in, .fade-in-left, .fade-in-right'
    );
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="homeCont">
      <video autoPlay loop muted playsInline className="video">
        <source src="/images/constrVid.mp4" type="video/mp4" />
      </video>
      <div className="titleCont fade-in">
        <div className="titleText">
          <h1 className="roca">Roca</h1>
          <h1 className="constLLC">Construction LLC</h1>
          <h2>Robert DelGado & Carl Deworsop</h2>
        </div>
      </div>

      <div className="sectionCont">
        <div className="section fade-in-left">
          <div className="textBlock">
            <h2>Recent Projects</h2>
            <p>
              Here's a look at some of our most recent residential and
              commercial construction projects. We take pride in delivering
              exceptional results.
            </p>
          </div>
          <img
            src="/images/Logo2.png"
            alt="Project"
            className="imageBlock rotateLeft"
          />
        </div>

        <div className="section fade-in-right">
          <img
            src="/images/Logo2.png"
            alt="Tools"
            className="imageBlock rotateRight"
          />
          <div className="textBlock">
            <h2>Our Services</h2>
            <p>
              From renovations to full builds, we offer a range of services
              tailored to your needs. Our team is committed to quality and
              safety.
            </p>
          </div>
        </div>

        <div className="section fade-in-left">
          <div className="textBlock">
            <h2>Get a Quote</h2>
            <p>
              Planning a project? Contact us today for a free consultation and
              estimate. We’re here to make your vision a reality.
            </p>
          </div>
          <img
            src="/images/Logo.png"
            alt="Contact"
            className="imageBlock rotateLeft"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
