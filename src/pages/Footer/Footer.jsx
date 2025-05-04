import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-section">
        <h2 className="footer-title">NeuroFlip</h2>
        <p>Boosting focus, productivity, and mental agility — all in one app.</p>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/focus-tools">Focus Tools</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Connect With Us</h3>
        <div className="social-icons">
          <FaTwitter />
          <FaInstagram />
          <FaFacebook />
        </div>
        <p>Email: support@neuroflip.com</p>
        <p>Customer Care: 1-800-NEUROFLIP</p>
        <p>Address: 42 Productivity Lane, Innovation Hub</p>
      </div>
    </div>
    <hr />
    <div className="footer-bottom">
      <p>© 2025 NeuroFlip. All rights reserved.</p>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Policy</a>
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;
