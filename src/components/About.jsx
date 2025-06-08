import React from "react";
import data from "../data/personalInfo.json";
import "../css/About.css";
import map from "../assets/images/map.png";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="title">
        About <span className="dot">me.</span>
      </h2>

      <div className="intro-box">
        <p>{data.about}</p>
      </div>

      <div className="about-columns">
        <div className="about-box">
          <h3>My Stack<span className="dot">.</span></h3>
          <div className="skills-grid">
            {data.skills.map((skill, i) => (
              <span key={i} className="skill-tag">
                {skill} <span className="star">★</span>
              </span>
            ))}
          </div>
        </div>

        <div className="about-box">
          <h3>My Special Place<span className="dot">.</span></h3>
          <div className="location-image">
            <img src={map} alt="My Location" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
