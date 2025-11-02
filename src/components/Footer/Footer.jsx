import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-top">
      <h1>
        <a href="#home">Theodor.</a>
      </h1>
      <input type="email" placeholder="Enter your email" />
      <button className="sub-btn">Subscribe</button>
      </div>

      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy; 2025 Teodor Stevanovic. All rights</p>
      </div>
    </section>
  );
};

export default Footer;
