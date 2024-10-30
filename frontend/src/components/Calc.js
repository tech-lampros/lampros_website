import React, { useState } from 'react';
import './calc.css';

const Calc = () => {
  const [area, setArea] = useState(1); // Default area
  const [constructionType, setConstructionType] = useState('basic'); // Default type
  const [cost, setCost] = useState({ totalCost: '', interiorCost: '' });

  const handleCalculate = () => {
    let totalCostRange, interiorCostRange;

    switch (constructionType) {
      case 'basic':
        totalCostRange = [1.53, 1.8];
        interiorCostRange = [0.75, 0.9];
        break;
      case 'premium':
        totalCostRange = [1.77, 2.03];
        interiorCostRange = [0.9, 1.05];
        break;
      case 'luxury':
        totalCostRange = [2.04, 2.61];
        interiorCostRange = [1.05, 1.2];
        break;
      default:
        return;
    }

    const totalCost = totalCostRange.map(cost => (cost * area).toFixed(2)).join(' - ');
    const interiorCost = interiorCostRange.map(cost => (cost * area).toFixed(2)).join(' - ');

    setCost({ totalCost, interiorCost });
  };

  return (
    <div className="calc-container">
      <div className="calc-content">
        <div className="form-section">
          <h1>Calculate Construction Cost</h1>
          <p>Get an estimate amount for your home construction</p>

          <div className="form-group">
            <label>Select State</label>
            <select defaultValue="kerala" disabled>
              <option value="kerala">Kerala</option>
            </select>
          </div>

          <div className="form-group">
            <label>Enter Area (Sq. feet)</label>
            <input
              type="number"
              min="1"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
            />
          </div>

          <div className="form-group">
            <label>Type of Construction</label>
            <select
              value={constructionType}
              onChange={(e) => setConstructionType(e.target.value)}
            >
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
              <option value="luxury">Luxury</option>
            </select>
          </div>

          <button className="calculate-btn" onClick={handleCalculate}>
            Calculate Cost
          </button>

          {cost.totalCost && (
            <div className="cost-result">
              <h2>Total Construction Cost (without Interior):</h2>
              <p>₹{cost.totalCost} K</p>

              <h2>Total Interior Cost:</h2>
              <p>(Includes wooden work, furniture & false ceiling only)</p>
              <p>₹{cost.interiorCost} K</p>
            </div>
          )}
        </div>

        <div className="image-section">
          <img
            src="https://i.imgur.com/KXOCITh.png"
            alt="Construction Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Calc;
