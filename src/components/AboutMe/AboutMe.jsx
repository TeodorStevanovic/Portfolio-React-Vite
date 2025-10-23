import React from "react";
import "./AboutMe.css";
import MyImage from "../../assets/profile-avatar.png";

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me-container">
      <h1 className="about-me-title">About Me</h1>
      <div className="about-me-info">
        <p>
          Motivated Junior Front-End Developer with solid knowledge of HTML,
          CSS, JavaScript, and React. Experienced in creating responsive,
          interactive, and user-friendly websites through practical projects and
          real-world simulations. Strong problem-solving skills, attention to
          detail, and ability to work both independently and in collaborative
          teams. Passionate about continuously learning modern web technologies
          and contributing to innovative web development projects.
        </p>
        <img src={MyImage} alt="profile-picture" />
      </div>
    </section>
  );
};

export default AboutMe;
