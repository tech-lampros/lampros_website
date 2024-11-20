import React, { useState } from 'react';
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
    {
        title: 'Modern Budget Living Room',
        src: livingroom,
        alt: 'Modern Living Room',
        price: '₹ 42 Lacks',
        location: '3BHK, 1480 sqft, Kozhikode, Kerala',
    },
    {
        title: 'Classic Interior 3BHK',
        src: bhk3,
        alt: 'Classic 3BHK',
        price: '₹ 50 Lacks',
        location: '3BHK, 1600 sqft, Calicut, Kerala',
    },
    {
        title: 'Luxury Bedroom Suite',
        src: bedroom,
        alt: 'Luxury Bedroom',
        price: '₹ 35 Lacks',
        location: '2BHK, 1200 sqft, Ernakulam, Kerala',
    },
    {
        title: 'Spacious Modular Kitchen',
        src: kitchen,
        alt: 'Spacious Kitchen',
        price: '₹ 25 Lacks',
        location: '1BHK, 800 sqft, Thrissur, Kerala',
    },
    {
        title: 'Elegant Dining Space',
        src: dining,
        alt: 'Dining Space',
        price: '₹ 30 Lacks',
        location: '3BHK, 1400 sqft, Malappuram, Kerala',
    },
    {
        title: 'Contemporary Staircase Design',
        src: staircase,
        alt: 'Staircase Design',
        price: '₹ 15 Lacks',
        location: 'Duplex, 2000 sqft, Kannur, Kerala',
    },
    {
        title: 'Stylish Storage Ideas',
        src: storage,
        alt: 'Storage Design',
        price: '₹ 18 Lacks',
        location: '2BHK, 1000 sqft, Trivandrum, Kerala',
    },
    {
        title: 'Modern Bathroom Designs',
        src: bathroom,
        alt: 'Modern Bathroom',
        price: '₹ 10 Lacks',
        location: '1BHK, 750 sqft, Kollam, Kerala',
    },
    {
        title: 'Elegant Elevation Concepts',
        src: elevation,
        alt: 'Elegant Elevation',
        price: '₹ 60 Lacks',
        location: '4BHK, 2500 sqft, Wayanad, Kerala',
    },
];

const DesignsPage = () => {
    const [modalImage, setModalImage] = useState(null);

    const openModal = (image) => {
        setModalImage(image);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <>
        <div className="designs-header">
            <div className="breadcrumb">Home › Designs › Living Room</div>
            <h1>Living Room Designs</h1>
            <p className="description">
                Discover a wide range of handpicked living room interior designs and décor ideas. We bring you living room designs 
                that are customizable, practical, and trendy. From modular TV units to wall paintings and living room wall designs, 
                you’ll find all the inspiration you’ll need to get started. Browse now to zero in on your favorite design and create 
                a living room space that reflects your style.
            </p>
            <div className="filters">
                <select className="filter-dropdown">
                    <option>Sort By</option>
                    <option>Popularity</option>
                    <option>Newest First</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                </select>
                <select className="filter-dropdown">
                    <option>Filter By</option>
                    <option>Modern</option>
                    <option>Classic</option>
                    <option>Luxury</option>
                </select>
                <select className="filter-dropdown">
                    <option>Type</option>
                    <option>Sofa Designs</option>
                    <option>Wall Units</option>
                    <option>Decor</option>
                </select>
                <select className="filter-dropdown">
                    <option>Category</option>
                    <option>Living Room</option>
                    <option>Dining Room</option>
                    <option>Bedroom</option>
                </select>
                <select className="filter-dropdown">
                    <option>City</option>
                    <option>Kozhikode</option>
                    <option>Ernakulam</option>
                    <option>Thrissur</option>
                </select>
                <select className="filter-dropdown">
                    <option>Built Up Area</option>
                    <option>800-1200 sqft</option>
                    <option>1200-1500 sqft</option>
                    <option>1500+ sqft</option>
                </select>
                <select className="filter-dropdown">
                    <option>Layout</option>
                    <option>2BHK</option>
                    <option>3BHK</option>
                    <option>4BHK</option>
                </select>
                <select className="filter-dropdown">
                    <option>Cost</option>
                    <option>₹10 Lacks - ₹20 Lacks</option>
                    <option>₹20 Lacks - ₹40 Lacks</option>
                    <option>₹40 Lacks+</option>
                </select>
            </div>
        </div>
        <div className="designs-container">
            <h2>Explore Home Designs</h2>
            <div className="designs-grid">
                {designs.map((design, index) => (
                    <div key={index} className="design-item" onClick={() => openModal(design.src)}>
                        <LazyImage src={design.src} alt={design.alt} className="design-image" />
                        <div className="design-details">
                            <h3>{design.title}</h3>
                            <p className="design-price">{design.price}</p>
                            <p className="design-location">{design.location}</p>
                        </div>
                    </div>
                ))}
            </div>

            {modalImage && (
                <div className="modal" onClick={closeModal}>
                    <img src={modalImage} alt="Full view" className="modal-image" />
                </div>
            )}
        </div>
        </>
    );
};

export default DesignsPage;
