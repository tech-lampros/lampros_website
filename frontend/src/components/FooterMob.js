import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './FooterMob.css';
import logo from '../assets/logo white.png';

const Footer = () => {
  const [companyOpen, setCompanyOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className={`footer-section ${companyOpen ? 'active' : ''}`}>
          <h2 onClick={() => setCompanyOpen(!companyOpen)}>
            Company {companyOpen ? <FaChevronUp /> : <FaChevronDown />}
          </h2>
          <ul>
            <li><button onClick={() => alert('About us clicked')} className="link-button">About us</button></li>
            <li><button onClick={() => alert('Become a pro clicked')} className="link-button">Become a pro</button></li>
            <li><button onClick={() => alert('Contact us clicked')} className="link-button">Contact us</button></li>
          </ul>
        </div>
        <div className={`footer-section ${supportOpen ? 'active' : ''}`}>
          <h2 onClick={() => setSupportOpen(!supportOpen)}>
            Support {supportOpen ? <FaChevronUp /> : <FaChevronDown />}
          </h2>
          <ul>
            <li><button onClick={() => alert('Terms of services clicked')} className="link-button">Terms of services</button></li>
            <li><button onClick={() => alert('Privacy policy clicked')} className="link-button">Privacy policy</button></li>
            <li><button onClick={() => alert('Legal clicked')} className="link-button">Legal</button></li>
          </ul>
        </div>
        <div className="footer-section about">
          <img src={logo} className='small-logo' alt="Lampros Logo" />
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
      </div>
      <div className="footer-bottom">
        <p>&copy; Lampros 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
