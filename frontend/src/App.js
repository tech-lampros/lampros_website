// src/App.js
import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Mobnav from './components/Mobnav';
import LandCarousel from './components/LandCarousel';
import Explore from './components/Explore';
import Benefits from './components/Benefits';
import AppDownload from './components/AppDownload';
import Footer from './components/Footer';
import ProHome from './components/pro/ProHome';
import AccountCreation from './components/pro/AccountCreation';

function App() {
  const [view, setView] = useState('home'); // 'home' | 'pro' | 'accountCreation'

  const handleJoinAsPro = () => {
    setView('pro');
  };

  const handleGetStarted = () => {
    setView('accountCreation');
  };

  const handleHomeClick = () => {
    setView('home');
  };

  return (
    <div className="App">
       <div>
      <div className="desktop-view">
        <Nav onHomeClick={handleHomeClick} onJoinAsProClick={handleJoinAsPro} />
      </div>
      <div className="mobile-view">
        <Mobnav onHomeClick={handleHomeClick} onJoinAsProClick={handleJoinAsPro} />
      </div>
    </div>
      {view === 'home' && (
        <>
          <LandCarousel />
          <Explore />
          <Benefits />
          <AppDownload />
        </>
      )}
      {view === 'pro' && <ProHome onGetStarted={handleGetStarted} />}
      {view === 'accountCreation' && <AccountCreation />}
      <Footer />
    </div>
  );
}

export default App;
