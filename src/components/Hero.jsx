import React from "react";
import data from "../data/personalInfo.json";
import "../css/Hero.css";
import profile from '../assets/images/Profile.png';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <h4>Hey, I'm {data.name} 👋</h4>
        <h1>
          <span className="highlight">Full</span>Stack <br /> Developer
        </h1>
        <p>{data.tagline}</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-dark">Get In Touch</a>
          <a href="#projects" className="btn btn-light">Browse Projects</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="image-wrapper">
          <img src={profile} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
