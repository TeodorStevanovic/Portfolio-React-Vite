import React, { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import theme_pattern from "../../assets/theme_pattern.svg";
import "./Contact.css";

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const texts = {
    sr: {
      title: "Kontaktiraj me",
      titleLeft: "Započnimo razgovor",
      description:
        "Slobodno me kontaktiraj ako imaš bilo kakva pitanja, sugestije ili ideje za saradnju. Odgovoriću ti čim bude moguće.",
    },
    en: {
      title: "Contact me",
      titleLeft: "Let's Talk",
      description:
        "Feel free to reach out if you have any questions, suggestions, or collaboration ideas. I’ll get back to you as soon as possible.",
    },
  };
  return (
    <section id="contact" className="contact-container">
      <div className="contact-title">
        <h1>{texts[language].title}</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>{texts[language].titleLeft}</h1>
          <p>{texts[language].description}</p>
        </div>
        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
