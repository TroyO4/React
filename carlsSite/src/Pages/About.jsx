import React, { useEffect } from 'react';
import './About.css';

const About = () => {
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

    const elements = document.querySelectorAll(
      '.aboutFadeIn, .aboutFadeInLeft, .aboutFadeInRight'
    );
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="aboutPageContainer">
      <div className="aboutTitleWrapper">
        <div className="aboutTitleText aboutFadeIn">
          <h1>Get to Know Us</h1>
        </div>
      </div>

      <section className="aboutSection">
        <div className="aboutTextBlock aboutFadeInLeft">
          <h2>Our Mission</h2>
          <p>
            At Roca Construction, we aim to deliver excellence in everything we
            do — from innovation to execution. Our mission is to build
            long-lasting relationships by delivering trustworthy, efficient, and
            cutting-edge solutions tailored to your needs.
          </p>
        </div>
        <img
          className="aboutImageBlock aboutRotateRight aboutFadeInRight"
          src="/images/Logo2.png"
          alt="Team at work"
        />
      </section>

      <section className="aboutSection">
        <img
          className="aboutImageBlock aboutRotateLeft aboutFadeInLeft"
          src="/images/Logo2.png"
          alt="Construction site"
        />
        <div className="aboutTextBlock aboutFadeInRight">
          <h2>What Sets Us Apart</h2>
          <p>
            We combine deep expertise with modern tools and a personal touch.
            Whether you're launching a new project or renovating the old, our
            team ensures your vision is translated into reality — with quality
            and care at the core.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
