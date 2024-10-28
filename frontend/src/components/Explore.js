import React, { useState } from 'react';
import './Explore.css';
import img1 from '../assets/expo1.png';
import img2 from '../assets/expo2.png';
import img3 from '../assets/expo3.png';
import img4 from '../assets/expo4.png';

const Explore = ({ onDesignsClick, onProductsClick, onProfessionalsClick }) => {
  const [showMore, setShowMore] = useState([false, false, false, false]);

  const handleReadMore = (index) => {
    const updatedShowMore = [...showMore];
    updatedShowMore[index] = !updatedShowMore[index];
    setShowMore(updatedShowMore);
  };

  const items = [
    {
      img: img1,
      title: 'Explore Designs',
      text: 'Discover stylish designs for kitchens, bedrooms, and more. Perfect solutions for every taste.',
      onClick: () => onDesignsClick('image'),
    },
    {
      img: img2,
      title: 'Find Professionals',
      text: 'Connect with experts to bring your vision to life with exceptional service and quality.',
      onClick: () => onProfessionalsClick('image'),
    },
    {
      img: img3,
      title: 'Find Products & Materials',
      text: 'Explore a variety of materials and products for your construction and renovation needs.',
      onClick: () => onProductsClick('image'),
    },
    {
      img: img4,
      title: 'Properties & Lands',
      text: 'Browse properties and lands available for sale or lease and find your ideal investment.',
      onClick: () => console.log('Properties & Lands clicked'),
    },
  ];

  return (
    <div className="explore-container">
      <h2 className="explore-title">Explore Lampros</h2>
      <div className="explore-grid">
        {items.map((item, index) => (
          <div className="explore-item" key={index} onClick={item.onClick}>
            <img src={item.img} alt={item.title} className="explore-image" />
            <div className="explore-text-container">
              <h3 className="explore-subtitle">{item.title}</h3>
              <p className={`explore-text ${showMore[index] ? 'show-more' : ''}`}>
                {item.text}
              </p>
              <button
                className="read-more-btn"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent item click
                  handleReadMore(index);
                }}
              >
                {showMore[index] ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
