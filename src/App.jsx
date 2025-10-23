import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import "./App.css";

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
