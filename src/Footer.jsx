import "./Footer.css";
import React from "react";
// import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer border ">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h2 className="footer-title">PCLPTH</h2>
          <p className="footer-text">
            High-quality photoshoot, videoshoot, and editing services for
            professionals and brands.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Follow Us</h3>
          <ul className="footer-links">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">YouTube</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} PCLPTH. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
