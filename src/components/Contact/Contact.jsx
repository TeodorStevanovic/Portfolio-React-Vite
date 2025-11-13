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
      lableTitleOne: "Tvoje Ime",
      lableTitleTwo: "Tvoj Email",
      textareaTitle: "Upisi tvoju poruku ovde",
      inputName: "Upisi svoje ime",
      inputEmail: "Upisi svoju email adresu",
      inputMessage: "Upisi svoju poruku",
      submitBtn: "Posalji sada",
    },
    en: {
      title: "Contact me",
      titleLeft: "Let's Talk",
      description:
        "Feel free to reach out if you have any questions, suggestions, or collaboration ideas. I’ll get back to you as soon as possible.",
      lableTitleOne: "Your Name",
      lableTitleTwo: "Your Email",
      textareaTitle: "Write your message here",
      inputName: "Enter your name",
      inputEmail: "Enter your email",
      inputMessage: "Enter your message",
      submitBtn: "Submit Now",
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
          <label htmlFor="">{texts[language].lableTitleOne}</label>
          <input type="text" placeholder={texts[language].inputName} name="name" />
          <label htmlFor="">{texts[language].lableTitleTwo}</label>
          <input type="email" placeholder={texts[language].inputEmail} name="email" />
          <label htmlFor="">{texts[language].textareaTitle}</label>
          <textarea
            name="message"
            rows="8"
            placeholder={texts[language].inputMessage}
          ></textarea>
          <button type="submit" className="contact-submit">
            {texts[language].submitBtn}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
