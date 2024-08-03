import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Land_Carousel.css';
import data from '../assets/carouselData.json';

const Land_Carousel = () => {
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
