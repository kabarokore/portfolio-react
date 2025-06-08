import React from 'react';
import experiences from '../data/experience.json';
import '../css/Experience.css';

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2 className="title">
        My <span className="dot">Experience.</span>
      </h2>

      <p className="intro-text">
        While I haven’t worked professionally yet, I’ve applied my skills through academic training and class projects that reflect my capability and growth.
      </p>

      <div className="experience-grid">
        {experiences.map((item, index) => (
          <div className="exp-card" key={index}>
            <div className="exp-header">
              <h3>{item.title}</h3>
              <span className="duration">{item.duration}</span>
            </div>
            <p className="place">{item.company || item.institution}</p>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
