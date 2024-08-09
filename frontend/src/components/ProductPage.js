import React from 'react';
import './ProductsPage.css';

// Import images
import foundation from '../assets/products/product-exterior_features.png';
import framing from '../assets/products/products-framing.png';
import exteriorMaterials from '../assets/products/products-exterior_materials.png';
import interiorWallsCeilings from '../assets/products/product-interial.png';
import flooring from '../assets/products/product-flooring.png';
import plumbing from '../assets/products/product-plumbing.png';
import electrical from '../assets/products/products-electrical.png';
import hvac from '../assets/products/products-hvac.png';
import interiorFinishes from '../assets/products/products-Interior_finishes.png';
import exteriorFeatures from '../assets/products/product-exterior_features.png';
import miscellaneous from '../assets/products/products-miscellaneous.png';
import smartHomeTechnology from '../assets/products/product-smart-home.png';
import wallsCeilings from '../assets/products/product-wall_selling.png';
import lighting from '../assets/products/product-lighting.png';
import doorsWindows from '../assets/products/products-doors_windows.png';
import cabinetryStorage from '../assets/products/products-storage.png';
import sanitarywaresBathroomFittings from '../assets/products/products-bathroom_fittings.png';
import curtainsDecor from '../assets/products/products-curtains.png';
import landscapingOutdoorDecor from '../assets/products/products-miscellaneous.png';
import solarSystems from '../assets/products/products-solar.png';
import furnitureHomeDecor from '../assets/products/products-furniture.png';
import LazyImage from './LazyImage';


const products = [
    { title: 'Foundation and Structure', src: foundation, alt: 'Foundation and Structure' },
    { title: 'Framing', src: framing, alt: 'Framing' },
    { title: 'Exterior Materials', src: exteriorMaterials, alt: 'Exterior Materials' },
    { title: 'Interior Walls and Ceilings', src: interiorWallsCeilings, alt: 'Interior Walls and Ceilings' },
    { title: 'Flooring', src: flooring, alt: 'Flooring' },
    { title: 'Plumbing', src: plumbing, alt: 'Plumbing' },
    { title: 'Electrical', src: electrical, alt: 'Electrical' },
    { title: 'HVAC (Heating, Ventilation, and Air Conditioning)', src: hvac, alt: 'HVAC' },
    { title: 'Interior Finishes', src: interiorFinishes, alt: 'Interior Finishes' },
    { title: 'Exterior Features', src: exteriorFeatures, alt: 'Exterior Features' },
    { title: 'Miscellaneous', src: miscellaneous, alt: 'Miscellaneous' },
    { title: 'Smart Home Technology', src: smartHomeTechnology, alt: 'Smart Home Technology' },
    { title: 'Walls and Ceilings', src: wallsCeilings, alt: 'Walls and Ceilings' },
    { title: 'Lighting', src: lighting, alt: 'Lighting' },
    { title: 'Doors and Windows', src: doorsWindows, alt: 'Doors and Windows' },
    { title: 'Cabinetry and Storage', src: cabinetryStorage, alt: 'Cabinetry and Storage' },
    { title: 'Sanitarywares and Bathroom Fittings', src: sanitarywaresBathroomFittings, alt: 'Sanitarywares and Bathroom Fittings' },
    { title: 'Curtains and Decor', src: curtainsDecor, alt: 'Curtains and Decor' },
    { title: 'Landscaping and Outdoor Decor', src: landscapingOutdoorDecor, alt: 'Landscaping and Outdoor Decor' },
    { title: 'Solar & Systems', src: solarSystems, alt: 'Solar & Systems' },
    { title: 'Furniture and Home Decor', src: furnitureHomeDecor, alt: 'Furniture and Home Decor' },
];

const ProductsPage = () => {
    return (
        <div className="products-container">
            <h2>Products & Materials</h2>
            <div className="products-grid">
                {products.map((product, index) => (
                    <div key={index} className="product-item">
                       <LazyImage src={product.src} alt={product.alt} className="design-image" />
                        <h3>{product.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
