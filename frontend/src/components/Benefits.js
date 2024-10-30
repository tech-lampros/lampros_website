import React from 'react';
import { FaUserTie, FaComments, FaStar } from 'react-icons/fa';
import './Benefits.css';

const Benefits = () => {
  const benefitItems = [
    {
      icon: <FaUserTie />,
      title: 'Qualified Employees',
      text: 'Our team consists of more than 4 qualified and experienced real estate brokers and property managers ready to help you.',
    },
    {
      icon: <FaComments />,
      title: 'Free Consultations',
      text: 'Our acquaintance with a client always begins with a free consultation to find out what kind of property they are looking for.',
    },
    {
      icon: <FaStar />,
      title: '100% Guaranteed',
      text: 'Our service quality is 100% guaranteed to ensure maximum client satisfaction.',
    },
  ];

  return (
    <div className="benefits-container">
      <h2 className="benefits-title">Benefits</h2>
      <div className="benefit-items-container">
        {benefitItems.map((item, index) => (
          <div className="benefit-item" key={index}>
            <div className="benefit-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
