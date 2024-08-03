import React from 'react';
import { FaUserTie, FaComments, FaStar } from 'react-icons/fa';
import './Benefits.css';

const Benefits = () => {
  return (
    <div className="benefits-container">
      <h2 className="benefits-title">Benefits</h2>
      <div className="benefit-items-container">
        <div className="benefit-item">
          <FaUserTie className="benefit-icon" />
          <h3>Qualified Employees</h3>
          <p>Our team consists of more than 4 qualified and experienced real estate brokers and property managers ready to help you.</p>
        </div>
        <div className="benefit-item">
          <FaComments className="benefit-icon" />
          <h3>Free Consultations</h3>
          <p>Our acquaintance with a client always begins with a free consultation to find out what kind of property they are looking for.</p>
        </div>
        <div className="benefit-item">
          <FaStar className="benefit-icon" />
          <h3>100% Guaranteed</h3>
          <p>Our team consists of more than 4 qualified and experienced real estate brokers and property managers ready to help you.</p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
