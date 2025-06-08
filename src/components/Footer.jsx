import React from 'react';
import contact from '../data/contact.json';
import personalInfo from '../data/personalInfo.json'
import '../css/Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {year} {personalInfo.name}. All rights reserved.</p>
        <div className="socials">
          {contact.linkedin && (
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          )}
          {contact.github && (
            <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          )}
          {contact.email && (
            <a href={`mailto:${contact.email}`}>Email</a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
