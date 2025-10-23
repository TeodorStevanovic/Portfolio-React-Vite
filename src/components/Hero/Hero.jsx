import React from "react";
import "./Hero.css";
import MyImage from "../../assets/profile-avatar.png"

const Hero = () => {
  return (
    <section id="home" className="hero-container">
      <img src={MyImage} alt="profile-picture" className="profile-picture"/>
      <div className="hero-title">
        <h2>Hi, I’m Teodor Stevanović</h2>
        <h1>Junior Front-End Developer</h1>
        <p>
          I build interactive and responsive web applications, turning ideas
          into user-friendly digital experiences.
        </p>
      </div>
    </section>
  );
};

export default Hero;
