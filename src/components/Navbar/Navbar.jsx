import React from "react";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="nav-container">
      <h2 className="nav-title">
        <a href="#home">Theodor.</a>
      </h2>

      <ul className="nav-menu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about-me">About me</a>
        </li>
        <li>Projects</li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
