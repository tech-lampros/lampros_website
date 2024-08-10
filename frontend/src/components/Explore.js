import React from 'react';
import './Explore.css'; // Import the CSS file for styling
import img1 from '../assets/expo1.png';
import img2 from '../assets/expo2.png';
import img3 from '../assets/expo3.png';
import img4 from '../assets/expo4.png';

const Explore = ({ onDesignsClick, onProductsClick, onProfessionalsClick }) => {
  return (
    <div className="explore-container">
      <h2 className="explore-title">Explore Lampros</h2>
      <div className="explore-grid">
        <div className="explore-item">
          <img 
            src={img1} 
            alt="Explore Designs" 
            className="explore-image" 
            onClick={() => onDesignsClick('image')}
          />
          <div className="explore-text-container">
            <h3 
              className="explore-subtitle" 
              onClick={() => onDesignsClick('text')}
            >
              Explore Designs
            </h3>
            <p className="explore-text">
              Thousands of unique and stylish designs for kitchen, bedroom, dining areas, and much more are available to suit every taste and need.
            </p>
          </div>
        </div>
        <div className="explore-item">
          <img 
            src={img2} 
            alt="Find Professionals" 
            className="explore-image" 
            onClick={() => onProfessionalsClick('image')}
          />
          <div className="explore-text-container">
            <h3 
              className="explore-subtitle" 
              onClick={() => onProfessionalsClick('text')}
            >
              Find Professionals
            </h3>
            <p className="explore-text">
              Connect with skilled professionals to bring your dream spaces to life with expert advice and quality service.
            </p>
          </div>
        </div>
        <div className="explore-item">
          <img 
            src={img3} 
            alt="Find Products & Materials" 
            className="explore-image" 
            onClick={() => onProductsClick('image')}
          />
          <div className="explore-text-container">
            <h3 
              className="explore-subtitle" 
              onClick={() => onProductsClick('text')}
            >
              Find Products & Materials
            </h3>
            <p className="explore-text">
              Discover a wide range of products and materials to suit your renovation and construction needs.
            </p>
          </div>
        </div>
        <div className="explore-item">
          <img 
            src={img4} 
            alt="Properties & Lands" 
            className="explore-image" 
            onClick={() => console.log('Properties & Lands image clicked')}
          />
          <div className="explore-text-container">
            <h3 
              className="explore-subtitle" 
              onClick={() => console.log('Properties & Lands text clicked')}
            >
              Properties & Lands
            </h3>
            <p className="explore-text">
              Browse through our listings of properties and lands available for purchase or lease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
