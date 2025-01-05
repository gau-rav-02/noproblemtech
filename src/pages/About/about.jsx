import React from 'react';
import './styles.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="hero-section">
        <h1>About Us</h1>
        <p>We are committed to delivering the best solutions for our clients.</p>
      </section>

      <section className="mission-section">
        <div className="content-container">
          <h2>Our Mission</h2>
          <p>
            We empower individuals and businesses with innovative solutions in web development, software development, and digital marketing, providing comprehensive training and support to achieve success in the modern world.
          </p>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" />
            <h3>Satish Pawar</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" />
            <h3>Pooja Dongare</h3>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" />
            <h3>Krishna C.</h3>
            <p>Head of Design</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
