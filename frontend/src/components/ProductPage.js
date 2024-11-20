import React, { useState } from 'react';
import './ProductsPage.css';
import LazyImage from '../components/LazyImage.js';

// Import images
import foundation from '../assets/products/product-exterior_features.png';
import framing from '../assets/products/products-framing.png';
import exteriorMaterials from '../assets/products/products-exterior_materials.png';
import interiorWallsCeilings from '../assets/products/product-interial.png';
import flooring from '../assets/products/product-flooring.png';
import plumbing from '../assets/products/product-plumbing.png';
import electrical from '../assets/products/products-electrical.png';
import hvac from '../assets/products/products-hvac.png';

const products = [
    {
        title: 'Foundation and Structure',
        src: foundation,
        alt: 'Foundation and Structure',
        price: '₹ 10 Lacks',
        location: 'Kozhikode, Kerala',
    },
    {
        title: 'Framing',
        src: framing,
        alt: 'Framing',
        price: '₹ 8 Lacks',
        location: 'Thrissur, Kerala',
    },
    {
        title: 'Exterior Materials',
        src: exteriorMaterials,
        alt: 'Exterior Materials',
        price: '₹ 15 Lacks',
        location: 'Ernakulam, Kerala',
    },
    {
        title: 'Interior Walls and Ceilings',
        src: interiorWallsCeilings,
        alt: 'Interior Walls and Ceilings',
        price: '₹ 12 Lacks',
        location: 'Malappuram, Kerala',
    },
    {
        title: 'Flooring',
        src: flooring,
        alt: 'Flooring',
        price: '₹ 18 Lacks',
        location: 'Trivandrum, Kerala',
    },
    {
        title: 'Plumbing',
        src: plumbing,
        alt: 'Plumbing',
        price: '₹ 9 Lacks',
        location: 'Kollam, Kerala',
    },
    {
        title: 'Electrical',
        src: electrical,
        alt: 'Electrical',
        price: '₹ 7 Lacks',
        location: 'Kannur, Kerala',
    },
    {
        title: 'HVAC (Heating, Ventilation, and Air Conditioning)',
        src: hvac,
        alt: 'HVAC',
        price: '₹ 20 Lacks',
        location: 'Wayanad, Kerala',
    },
];

const ProductsPage = () => {
    const [modalImage, setModalImage] = useState(null);

    const openModal = (image) => {
        setModalImage(image);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <>
            <div className="products-header">
                <div className="breadcrumb">Home › Products › Materials</div>
                <h1>Products & Materials</h1>
                <p className="description">
                    Explore a wide range of premium-quality materials and products for your home. From structural components to
                    stylish finishes, discover everything you need for a perfect home. Browse categories like flooring, plumbing,
                    electrical, and more to find the best options for your requirements.
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
                        <option>Structural</option>
                        <option>Finishing</option>
                        <option>Technology</option>
                    </select>
                    <select className="filter-dropdown">
                        <option>Category</option>
                        <option>Foundation</option>
                        <option>Interior</option>
                        <option>Exterior</option>
                    </select>
                </div>
            </div>
            <div className="products-container">
                <h2>Explore Products</h2>
                <div className="products-grid">
                    {products.map((product, index) => (
                        <div key={index} className="product-item" onClick={() => openModal(product.src)}>
                            <LazyImage src={product.src} alt={product.alt} className="product-image" />
                            <div className="product-details">
                                <h3>{product.title}</h3>
                                <p className="product-price">{product.price}</p>
                                <p className="product-location">{product.location}</p>
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

export default ProductsPage;
