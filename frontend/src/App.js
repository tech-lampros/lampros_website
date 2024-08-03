import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import LandCarousel from './components/LandCarousel';
import Explore from './components/Explore';
import Benefits from './components/Benefits';
import AppDownload from './components/AppDownload';
import Footer from './components/Footer';
import ProHome from './components/pro/AccountCreation';

function App() {
  const [isProView, setIsProView] = useState(false);

  const handleJoinAsPro = () => {
    setIsProView(true);
  };

  const handleHomeClick = () => {
    setIsProView(false);
  };

  return (
    <div className="App">
      <Nav onHomeClick={handleHomeClick} onJoinAsProClick={handleJoinAsPro} />
      {isProView ? (
        <ProHome />
      ) : (
        <>
          <LandCarousel />
          <Explore />
          <Benefits />
          <AppDownload />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
