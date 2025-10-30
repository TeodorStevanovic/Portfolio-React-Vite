import React, { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import "./Contact.css";

const Contact = () => {
    const {language} = useContext(LanguageContext);
    const texts = {
        sr: {title: "Kontaktiraj me"},
        en: {title: "Contact me"}
    }
  return (
    <section id="contact" className="contact-container">
      <h1 className="contact-title">{texts[language].title}</h1>
    </section>
  );
};

export default Contact;
