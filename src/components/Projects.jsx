import React from 'react';
import projects from '../data/projects.json';
import '../css/Projects.css';
import projectImg from '../assets/images/project.png';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="title">
        My <span className="dot">Projects.</span>
      </h2>
      <p className="intro-text">
        Here are a few projects I've worked on recently — showcasing my skills in design, development, and problem-solving.
      </p>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-img">
              <img src={projectImg} alt={project.name} />
            </div>
            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p className="tech-stack"><strong>Tech:</strong> {project.tech.join(', ')}</p>
              <div className="project-links">
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-dark">Live Demo</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-light">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
