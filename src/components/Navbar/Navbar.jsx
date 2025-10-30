import React, { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import LanguageContext from "../../context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faGear } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);
  const texts = {
    sr: {
      home: "Početna",
      about: "O meni",
      project: "Projekti",
      contact: "Kontakt",
    },
    en: {
      home: "Home",
      about: "About me",
      project: "Projects",
      contact: "Contact",
    },
  };
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <nav className="nav-container">
      <h2 className="nav-title">
        <a href="#home">Theodor.</a>
      </h2>

      <ul className="nav-menu">
        <li>
          <a href="#home">{texts[language].home}</a>
        </li>
        <li>
          <a href="#about-me">{texts[language].about}</a>
        </li>
        <li>{texts[language].project}</li>
        <li>
          <a href="#contact">{texts[language].contact}</a>
        </li>
      </ul>

      <button
        className={`settings-btn ${openSettings ? "open" : ""}`}
        onClick={() => setOpenSettings((prev) => !prev)}
      >
        <FontAwesomeIcon icon={faGear} />
      </button>

      <div className={`settings-menu ${openSettings ? "show" : ""}`}>
        <button className="theme-btn" onClick={toggleTheme}>
          Theme:
          {theme === "light" ? <FontAwesomeIcon icon={faMoon}/> : <FontAwesomeIcon icon={faSun}/>}
        </button>
        <button className="language-btn" onClick={toggleLanguage}>
          Language: {language === "en" ? "SR" : "EN"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
