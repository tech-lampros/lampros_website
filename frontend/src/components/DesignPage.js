import React from 'react';
import './DesignsPage.css';
import LazyImage from '../components/LazyImage.js';

// Import images one by one
import bedroom from '../assets/designs/service-bedroom.png';
import kitchen from '../assets/designs/service-kitchen.png';
import bathroom from '../assets/designs/service-bathroom.png';
import livingroom from '../assets/designs/service-livingroom.png';
import storage from '../assets/designs/service-storage.png';
import furniture from '../assets/designs/service-furniture.png';
import dining from '../assets/designs/service-dining.png';
import staircase from '../assets/designs/service-staircase.png';
import elevation from '../assets/designs/service-elevation.png';
import bhk1 from '../assets/designs/service-1bhk.png';
import bhk2 from '../assets/designs/service-2bhk.png';
import bhk3 from '../assets/designs/service-3bhk.png';
import bhk4 from '../assets/designs/service-4bhk.png';
import plans2d from '../assets/designs/service-2dplan.png';

const designs = [
    { title: 'Bedroom', src: bedroom, alt: 'Bedroom' },
    { title: 'Kitchen', src: kitchen, alt: 'Kitchen' },
    { title: 'Bathroom', src: bathroom, alt: 'Bathroom' },
    { title: 'Living Room', src: livingroom, alt: 'Living Room' },
    { title: 'Storage', src: storage, alt: 'Storage' },
    { title: 'Furniture', src: furniture, alt: 'Furniture' },
    { title: 'Dining', src: dining, alt: 'Dining' },
    { title: 'Staircase', src: staircase, alt: 'Staircase' },
    { title: 'Elevation', src: elevation, alt: 'Elevation' },
    { title: '1BHK', src: bhk1, alt: '1BHK' },
    { title: '2BHK', src: bhk2, alt: '2BHK' },
    { title: '3BHK', src: bhk3, alt: '3BHK' },
    { title: '4BHK', src: bhk4, alt: '4BHK' },
    { title: '2D Plans', src: plans2d, alt: '2D Plans' },
];

const DesignsPage = () => {
    return (
        <div className="designs-container">
            <h2>Explore Home Designs</h2>
            <div className="designs-grid">
                {designs.map((design, index) => (
                    <div key={index} className="design-item">
                        <LazyImage src={design.src} alt={design.alt} className="design-image" />
                        <h3>{design.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DesignsPage;
