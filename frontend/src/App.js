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
  const [view, setView] = useState('home');

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div className="App">
      <div className="desktop-view">
        <Nav
          onHomeClick={() => handleViewChange('home')}
          onJoinAsProClick={() => handleViewChange('pro')}
          onDesignsClick={() => handleViewChange('designs')}
          onProductsClick={() => handleViewChange('products')}
          onProfessionalsClick={() => handleViewChange('professionals')}
        />
      </div>
      <div className="mobile-view">
        <Mobnav
          onHomeClick={() => handleViewChange('home')}
          onJoinAsProClick={() => handleViewChange('pro')}
          onDesignsClick={() => handleViewChange('designs')}
          onProductsClick={() => handleViewChange('products')}
          onProfessionalsClick={() => handleViewChange('professionals')}
        />
      </div>

      {view === 'home' && (
        <>
          <LandCarousel />
          <Explore
            onDesignsClick={() => handleViewChange('designs')}
            onProductsClick={() => handleViewChange('products')}
            onProfessionalsClick={() => handleViewChange('professionals')}
          />
          <Benefits />
          <AppDownload />
        </>
      )}
      {view === 'pro' && <ProHome onGetStarted={() => handleViewChange('accountCreation')} />}
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
