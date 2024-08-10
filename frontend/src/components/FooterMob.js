import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import './FooterMob.css';
import logo from '../assets/logo white.png';

const FooterMobile = () => {
  const [companyOpen, setCompanyOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <footer className="footer-mobile-container">
      <div className="footer-mobile-content">
        <div className={`footer-mobile-section ${companyOpen ? 'active' : ''}`}>
          <h2 onClick={() => setCompanyOpen(!companyOpen)}>Company</h2>
          {companyOpen && (
            <ul>
              <li><button className="footer-link-button">About Us</button></li>
              <li><button className="footer-link-button">Become a Pro</button></li>
              <li><button className="footer-link-button">Contact Us</button></li>
            </ul>
          )}
        </div>
        <div className={`footer-mobile-section ${supportOpen ? 'active' : ''}`}>
          <h2 onClick={() => setSupportOpen(!supportOpen)}>Support</h2>
          {supportOpen && (
            <ul>
              <li><button className="footer-link-button">Terms of Service</button></li>
              <li><button className="footer-link-button">Privacy Policy</button></li>
              <li><button className="footer-link-button">Legal</button></li>
            </ul>
          )}
        </div>
        <div className="footer-mobile-section about">
          <img src={logo} className='footer-small-image' alt="Lampros Logo" />
          <div className="footer-contact-info">
            <p><FaEnvelope /> careers.lampros@gmail.com</p>
            <p><FaPhoneAlt /> +91 7592990050</p>
            <p><FaMapMarkerAlt /> Calicut, Koduvally</p>
          </div>
          <div className="footer-social-icons">
            <button onClick={() => window.open('https://www.instagram.com', '_blank')} aria-label="Instagram" className="footer-icon-button"><FaInstagram /></button>
            <button onClick={() => window.open('https://www.facebook.com', '_blank')} aria-label="Facebook" className="footer-icon-button"><FaFacebookF /></button>
            <button onClick={() => window.open('https://www.twitter.com', '_blank')} aria-label="Twitter" className="footer-icon-button"><FaTwitter /></button>
            <button onClick={() => window.open('https://www.linkedin.com', '_blank')} aria-label="LinkedIn" className="footer-icon-button"><FaLinkedinIn /></button>
            <button onClick={() => window.open('https://www.youtube.com', '_blank')} aria-label="YouTube" className="footer-icon-button"><FaYoutube /></button>
          </div>
        </div>
      </div>
      <div className="footer-mobile-bottom">
        <p>&copy; Lampros 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterMobile;
