import React from 'react';
import './AppDownload.css';
import appImage from '../assets/app.png'; // Update the path accordingly
import playStore from '../assets/playstore.png'; // Update the path accordingly
import iosStore from '../assets/ios.png'; // Update the path accordingly

const AppDownload = () => {
  return (
    <div className="app-download-container">
      <div className="app-image">
        <img src={appImage} alt="App Screenshot" />
      </div>
      <div className="app-info">
        <h2>The best of <span className="highlight">Lampros</span> is in the app</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellente ac erat nec pretium.</p>
        <div className="download-buttons">
          <img src={playStore} alt="Get it on Google Play" />
          <img src={iosStore} alt="Download on the App Store" />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
