import React from 'react';
import './ContactMe.css'; // Create a corresponding CSS file for styling
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'; // Import social media icons from React Icons

const ContactMe = () => {
  return (
    <section id="contact">
    <div className="contact-me-box">
      
      <h2 className="contact-me-heading">Contact Me</h2>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/haripriya-bellamkonda-ab3b5a22b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="https://github.com/Haripriyabellamkonda" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
      </div>
      <p>haripriyabellamkonda05@gmail.com</p>
      {/* Add more contact information as needed */}
     
    </div>
    </section>

  );
};

export default ContactMe;
