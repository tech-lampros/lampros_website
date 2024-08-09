import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Mobnav from './components/Mobnav';
import LandCarousel from './components/LandCarousel';
import Explore from './components/Explore';
import Benefits from './components/Benefits';
import AppDownload from './components/AppDownload';
import Footer from './components/Footer';
import FooterMob from './components/FooterMob';
import ProHome from './components/pro/ProHome';
import AccountCreation from './components/pro/AccountCreation';
import DesignsPage from './components/DesignPage';
import ProductsPage from './components/ProductPage';
import Professionals from './components/Professionals';

function App() {
  const [view, setView] = useState('home'); // 'home' | 'pro' | 'accountCreation' | 'designs'

  const handleJoinAsPro = () => {
    setView('pro');
  };

  const handleGetStarted = () => {
    setView('accountCreation');
  };

  const handleHomeClick = () => {
    setView('home');
  };

  const handleDesignsClick = () => {
    setView('designs');
  };

  const handleProductsClick = () => {
    setView('products');
  };
  const handleProfessionalsClick = () => {
    setView('professionals');
  };

  return (
    <div className="App">
      <div>
        <div className="desktop-view">
          <Nav onHomeClick={handleHomeClick} onJoinAsProClick={handleJoinAsPro} onDesignsClick={handleDesignsClick} onProductsClick={handleProductsClick} onProfessionalsClick={handleProfessionalsClick} />
        </div>
        <div className="mobile-view">
          <Mobnav onHomeClick={handleHomeClick} onJoinAsProClick={handleJoinAsPro} onDesignsClick={handleDesignsClick} onProductsClick={handleProductsClick} onProfessionalsClick={handleProfessionalsClick} />
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
      {view === 'designs' && <DesignsPage />}
      {view === 'products' && <ProductsPage />}
      {view === 'professionals' && <Professionals />}
      <div className="desktop-view">
      <Footer />
         </div>
        <div className="mobile-view">
        <FooterMob />
        </div>
      
    </div>
  );
}

export default App;
