import React from "react";
import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import "./Hero.css";
import MyImage from "../../assets/profile-avatar.png";

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const texts = {
    sr: {
      titleOne: "Zdravo, Ja sam Teodor Stevanović",
      titleTwo: "Junior Front-End Developer",
      description:
        "Pravim interaktivne i responzivne web aplikacije, pretvarajući idejeu korisniku prijatna digitalna iskustva.",
    },
    en: {
      titleOne: "Hi, I’m Teodor Stevanović",
      titleTwo: "Junior Front-End Developer",
      description:
        "I build interactive and responsive web applications, turning ideas into user-friendly digital experiences.",
    },
  };

  return (
    <section id="home" className="hero-container">
      <img src={MyImage} alt="profile-picture" className="profile-picture" />
      <div className="hero-title">
        <h2>{texts[language].titleOne}</h2>
        <h1>{texts[language].titleTwo}</h1>
        <p>{texts[language].description}</p>
      </div>
    </section>
  );
};

export default Hero;
