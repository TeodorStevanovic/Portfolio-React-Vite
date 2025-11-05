import React, { useContext, useState } from "react";
import LanguageContext from "../../context/LanguageContext";
import "./AboutMe.css";
import MyImage from "../../assets/profile-avatar.png";

const AboutMe = () => {
  const { language } = useContext(LanguageContext);
  const texts = {
    sr: {
      about: "O meni",
      title: `Motivisani junior front-end programer sa čvrstim znanjem HTML-a, CSS-a, JavaScript-a i React-a.
       Iskusan u izradi responzivnih, interaktivnih i korisnički prijatnih veb sajtova kroz praktične projekte i simulacije iz stvarnog sveta. 
        Poseduje snažne veštine rešavanja problema, izraženu pažnju prema detaljima i sposobnost rada samostalno ili u timu. Strastven u kontinuiranom 
        učenju modernih veb tehnologija i doprinosu inovativnim projektima u oblasti veb razvoja.`,
    },

    en: {
      about: "About Me",
      title: `Motivated Junior Front-End Developer with solid knowledge of HTML,
          CSS, JavaScript, and React. Experienced in creating responsive,
          interactive, and user-friendly websites through practical projects and
          real-world simulations. Strong problem-solving skills, attention to
          detail, and ability to work both independently and in collaborative
          teams. Passionate about continuously learning modern web technologies
          and contributing to innovative web development projects.`,
    },
  };

  return (
    <div id="about-me" className="about-me">
      <h1 className="about-me-title">{texts[language].about}</h1>
      <div className="about-me-info">
        <p>{texts[language].title}</p>
        <img src={MyImage} alt="profile-picture" className="profile-picture" />
      </div>
    </div>
  );
};

export default AboutMe;
