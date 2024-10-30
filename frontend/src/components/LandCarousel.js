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

  const isMobile = window.innerWidth <= 768; // Detect if mobile

  return (
    <div className="carousel-wrapper">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={5000}
        showStatus={false}
        showArrows={true}
        useKeyboardArrows

      >
        {data.map((item, index) => (
          <div key={index} className="carousel-slide">
            <div className="carousel-image">
              <img src={item.imageUrl} alt={`Slide ${index}`} />
            </div>
            <div className="carousel-content">
              <h2>{item.title}</h2>
              <p>{isMobile ? item.shortText : item.subText}</p> {/* Short text on mobile */}
              <button 
                onClick={handleConsultationClick} 
                className="consultation-button"
              >
                Explore now
              </button>
            </div>
          </div>
        ))}
      </Carousel>

      {showConsultationForm && (
        <div className="modal-backdrop" onClick={closeConsultationForm}>
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()}
          >
            <ConsultationForm closeForm={closeConsultationForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LandCarousel;
