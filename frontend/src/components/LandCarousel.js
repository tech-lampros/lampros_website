// Land_Carousel.js
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Land_Carousel.css';
import ConsultationForm from './Consultation/ConsultationForm'; // Ensure correct path
import data from '../assets/carouselData.json'; // Your carousel data

const LandCarousel = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  const handleConsultationClick = () => {
    setShowConsultationForm(true);
  };

  const closeConsultationForm = () => {
    setShowConsultationForm(false);
  };

  return (
    <div>
      {/* Carousel Section */}
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
        showStatus={false}
        showArrows={true}
        useKeyboardArrows={true}
      >
        {data.map((item, index) => (
          <div key={index} className="carousel-slide">
            <div className="carousel-content">
              <h2>{item.title}</h2>
              <h2 className="highlighted-text">{item.highlightedText}</h2>
              <p>{item.subText}</p>
              <button 
                onClick={handleConsultationClick} 
                className="consultation-button"
              >
                Get Free Consultation
              </button>
            </div>
            <div className="carousel-image">
              <img src={item.imageUrl} alt={`Slide ${index}`} />
            </div>
          </div>
        ))}
      </Carousel>

      {/* Consultation Form Modal (Conditional Rendering) */}
      {showConsultationForm && (
        <div className="modal-backdrop" onClick={closeConsultationForm}>
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()} // Prevents closing modal when clicking inside the form
          >
            <ConsultationForm closeForm={closeConsultationForm} />
          </div>
        </div>
      )}
    </div>
  );
};



export default LandCarousel;
