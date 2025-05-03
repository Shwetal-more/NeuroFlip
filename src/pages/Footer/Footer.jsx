import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-title">Neuro Rehab</h2>
          <p>Empowering recovery through technology and expert care.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Our Services</Link>
            </li>
            <li>
              <Link to="/programs">Treatment Programs</Link>
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
          <p>Email: support@neurorehab.com</p>
          <p>Customer Care: 1-800-123-4567</p>
          <p>Address: 123 Health Street, Medical District</p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>© 2025 Neuro Rehab. All rights reserved.</p>
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
