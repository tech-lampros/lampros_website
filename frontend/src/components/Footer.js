import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>LAMPROS</h2>
          <p>A real tech company for complete home solutions under one roof.</p>
          <div className="contact-info">
            <p><FaEnvelope /> careers.lampros@gmail.com</p>
            <p><FaPhoneAlt /> +91 7592990050</p>
            <p><FaMapMarkerAlt /> Calicut, Koduvally</p>
          </div>
          <div className="social-icons">
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Company</h2>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Become a pro</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
        <div className="footer-section links">
          <h2>Support</h2>
          <ul>
            <li><a href="#">Terms of services</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Legal</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Lampros 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
