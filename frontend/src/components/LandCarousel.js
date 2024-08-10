import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Land_Carousel.css';
import data from '../assets/carouselData.json';

const Land_Carousel = () => {
  const whatsappNumber = "917592900050"; // Replace with your WhatsApp number
  const message = "Hello! I came across your website and am interested in learning more about your services. Could we discuss this further? Looking forward to your response!"; // Casual yet professional message

  return (
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
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="consultation-button"
            >
              Get Free Consultation
            </a>
          </div>
          <div className="carousel-image">
            <img src={item.imageUrl} alt={`Slide ${index}`} />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Land_Carousel;
