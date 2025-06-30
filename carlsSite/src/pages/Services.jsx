import React, { useEffect, useState } from 'react';
import './Services.css';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const servicesList = [
    {
      title: 'Consulting & Planning',
      desc: 'We guide your vision from concept to plan with strategic insights and feasibility assessments.',
      img: '/images/Logo.png',
    },
    {
      title: 'Custom Design',
      desc: 'Our designs reflect function, beauty, and brand identity — tailored to your exact goals.',
      img: '/images/Logo2.png',
    },
    {
      title: 'Full-Scale Construction',
      desc: 'We manage your project from ground-up construction to renovation with full transparency and excellence.',
      img: '/images/Logo.png',
    },
    {
      title: 'Post-Project Support',
      desc: 'We offer continued maintenance, performance reviews, and improvements beyond handoff.',
      img: '/images/Logo2.png',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? servicesList.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % servicesList.length);
  };

  const handleCardClick = (index) => {
    setCurrentIndex(index);
  };

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

    const elements = document.querySelectorAll('.servicesFadeIn');
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="servicesPageContainer">
      <div className="servicesHeader">
        <h1 className="servicesFadeIn">Our Services</h1>
        <p className="servicesFadeIn">
          We offer end-to-end solutions that combine creativity, efficiency, and
          quality — ensuring your project is done right.
        </p>
      </div>

      <div className="carouselWrapper">
        <button onClick={handlePrev} className="carouselBtn leftBtn">
          ❮
        </button>

        <div className="carousel">
          {servicesList.map((service, index) => {
            let position = 'cardHidden';
            if (index === currentIndex) position = 'cardActive';
            else if (
              index ===
              (currentIndex - 1 + servicesList.length) % servicesList.length
            )
              position = 'cardLeft';
            else if (index === (currentIndex + 1) % servicesList.length)
              position = 'cardRight';

            return (
              <div
                key={index}
                className={`servicesCard ${position}`}
                onClick={() => handleCardClick(index)}
                style={{
                  cursor: position !== 'cardHidden' ? 'pointer' : 'default',
                }}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="servicesImage"
                />
                <h2>{service.title}</h2>
                <p>{service.desc}</p>
              </div>
            );
          })}
        </div>

        <button onClick={handleNext} className="carouselBtn rightBtn">
          ❯
        </button>
      </div>

      <section className="servicesHighlights servicesFadeIn">
        <h2>Why Choose Us</h2>
        <div className="highlightsGrid">
          <div className="highlightCard">
            <h3>Transparent Communication</h3>
            <p>
              We keep you informed from start to finish — no surprises, just
              results.
            </p>
          </div>
          <div className="highlightCard">
            <h3>Certified Professionals</h3>
            <p>
              Our team consists of licensed and experienced experts across every
              trade.
            </p>
          </div>
          <div className="highlightCard">
            <h3>Reliable Timelines</h3>
            <p>
              We prioritize efficiency and realistic schedules, meeting
              deadlines without cutting corners.
            </p>
          </div>
        </div>
      </section>

      <section className="servicesCTA servicesFadeIn">
        <h2>Have a project in mind?</h2>
        <p>
          Let’s build something great together. Contact us today to get started.
        </p>
      </section>
    </div>
  );
};

export default Services;
