import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import './Footer.css';
import logo from '../assets/logo white.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <img src={logo} width={250}  alt="Get it on Google Play" />
          <p>A real tech company for complete home solutions under one roof.</p>
          <div className="contact-info">
            <p><FaEnvelope /> careers.lampros@gmail.com</p>
            <p><FaPhoneAlt /> +91 7592990050</p>
            <p><FaMapMarkerAlt /> Calicut, Koduvally</p>
          </div>
          <div className="social-icons">
            <button onClick={() => window.open('https://www.instagram.com', '_blank')} aria-label="Instagram" className="icon-button"><FaInstagram /></button>
            <button onClick={() => window.open('https://www.facebook.com', '_blank')} aria-label="Facebook" className="icon-button"><FaFacebookF /></button>
            <button onClick={() => window.open('https://www.twitter.com', '_blank')} aria-label="Twitter" className="icon-button"><FaTwitter /></button>
            <button onClick={() => window.open('https://www.linkedin.com', '_blank')} aria-label="LinkedIn" className="icon-button"><FaLinkedinIn /></button>
            <button onClick={() => window.open('https://www.youtube.com', '_blank')} aria-label="YouTube" className="icon-button"><FaYoutube /></button>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Company</h2>
          <ul>
            <li><button onClick={() => console.log('About us clicked')} className="link-button">About us</button></li>
            <li><button onClick={() => console.log('Become a pro clicked')} className="link-button">Become a pro</button></li>
            <li><button onClick={() => console.log('Contact us clicked')} className="link-button">Contact us</button></li>
          </ul>
        </div>
        <div className="footer-section links">
          <h2>Support</h2>
          <ul>
            <li><button onClick={() => console.log('Terms of services clicked')} className="link-button">Terms of services</button></li>
            <li><button onClick={() => console.log('Privacy policy clicked')} className="link-button">Privacy policy</button></li>
            <li><button onClick={() => console.log('Legal clicked')} className="link-button">Legal</button></li>
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
