import React, { useEffect } from 'react';
import './Contact.css';

const Contact = () => {
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
      '.fade-in, .fade-in-left, .fade-in-right'
    );
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="contactCont">
      <div className="contactTitle fade-in">
        <h1>Contact Us</h1>
        <h2>We'd love to hear from you</h2>
      </div>

      <div className="contactBody fade-in-left">
        <form className="contactForm">
          <label>Name</label>
          <input type="text" placeholder="Your name" />

          <label>Email</label>
          <input type="email" placeholder="Your email" />

          <label>Message</label>
          <textarea placeholder="Whats on your mind?" rows="6" />

          <button type="submit">Send Message</button>
        </form>

        <div className="contactImage fade-in-right">
          <img src="/images/Logo2.png" alt="Contact" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
