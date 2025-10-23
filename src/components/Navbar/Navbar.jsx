import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <h2 className="nav-title"><a href="#home">Theodor.</a></h2>
      <ul className="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about-me">About me</a></li>
        <li>Projects</li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
