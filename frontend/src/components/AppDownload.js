import React from 'react';
import './AppDownload.css';
import appImage from '../assets/hand.png'; // Update the path accordingly
import playStore from '../assets/app.jpg'; // Update the path accordingly=
import logo from '../assets/logo.png'

const AppDownload = () => {
  return (
    <div className="app-download-container">
      <div className="app-image">
        <img src={appImage} alt="App Screenshot" width={270} height={400}/>
      </div>
      <div className="app-info">
        <h2>The best of <img src={logo} className="small-logoo" alt="Logo" /> is in the app</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellente ac erat nec pretium.</p>
        <div className="download-buttons">
          <img src={playStore}  alt="Get it on Google Play" />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
