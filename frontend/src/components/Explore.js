import React from 'react';
import './Explore.css';
import img1 from '../assets/expo1.png';
import img2 from '../assets/expo2.png';
import img3 from '../assets/expo3.png';
import img4 from '../assets/expo4.png';

const Explore = ({ onDesignsClick, onProductsClick, onProfessionalsClick }) => {
  const items = [
    {
      img: img1,
      title: 'Explore designs',
      text: 'Discover thousands of unique, stylish designs for kitchens, bedrooms, dining areas, and more to suit every taste.',
      onClick: () => onDesignsClick('image'),
    },
    {
      img: img2,
      title: 'Find professionals',
      text: 'Connect with professionals to bring your vision to life with exceptional service and quality.',
      onClick: () => onProfessionalsClick('image'),
    },
    {
      img: img3,
      title: 'Find products & Materials',
      text: 'Explore various materials and products for all your construction and renovation needs.',
      onClick: () => onProductsClick('image'),
    },
    {
      img: img4,
      title: 'Properties and Lands',
      text: 'Browse properties and lands available for sale or lease, and find your ideal investment.',
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
            <div>
              <h3 className="explore-subtitle">{item.title}</h3>
              <p className="explore-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
