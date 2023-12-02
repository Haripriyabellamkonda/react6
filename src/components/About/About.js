// src/components/About/About.js
import React from 'react';
import './About.css'; // Import the CSS file for About component
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className='about-heading'>Hi,My name is Haripriya</h2>
          <p>
            Welcome to my portfolio! I am a passionate and dedicated individual with expertise in
            front-end and back-end technologies.In addition to this,I have cultivated a foundational understanding of AI and ML concepts. With a strong foundation in computer science and hands-on
            experience in various programming languages, I am always eager to learn and adapt to new
            challenges.
          </p>
        </div>
        <div className="buttons">
          <a href="https://www.linkedin.com/in/haripriya-bellamkonda-ab3b5a22b/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center' }}>
          <FaLinkedin style={{ marginRight: '5px' }} /> LinkedIn 
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
