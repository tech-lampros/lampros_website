import React, { useState } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom'; // Don't import Router here
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
import ProLogin from './components/pro/ProLogin'; 
import Prodash from './components/pro/ProDash'; // Import ProDash component
import AddProduct from './components/pro/AddProduct'; // Import AddProduct component
import PrivacyPolicy from './components/Privacy';
import Tearms from './components/Tearms.js'
import Calc from './components/Calc';

function App() {
  const [view, setView] = useState('home');
  const location = useLocation(); // Correct use of useLocation inside Router

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const isProDash = location.pathname === '/proDash'; // Check if the current route is "/proDash"
  const isAddProduct = location.pathname === '/add-product'; // Check if the current route is "/add-product"
  const isPrivacy = location.pathname === '/privacy_policy';
  const isTearms = location.pathname === '/TermsAndConditions';

  return (
    <div className="App">
      {/* Only show the navigation, content, and footer if NOT on the ProDash or AddProduct routes */}
      {!isProDash && !isAddProduct && !isPrivacy && !isTearms (
        <>
          <div className="desktop-view">
            <Nav
              onHomeClick={() => handleViewChange('home')}
              onJoinAsProClick={() => handleViewChange('pro')} 
              onLogin={() => handleViewChange('proLogin')}
              onDesignsClick={() => handleViewChange('designs')}
              onProductsClick={() => handleViewChange('products')}
              onProfessionalsClick={() => handleViewChange('professionals')}
            />
          </div>
          <div className="mobile-view">
            <Mobnav
              onHomeClick={() => handleViewChange('home')}
              onJoinAsProClick={() => handleViewChange('proLogin')} 
              onDesignsClick={() => handleViewChange('designs')}
              onProductsClick={() => handleViewChange('products')}
              onProfessionalsClick={() => handleViewChange('professionals')}
            />
          </div>

          {/* Manage views with state like before */}
          {view === 'home' && (
            <>
              <LandCarousel />
              <Explore
                onDesignsClick={() => handleViewChange('designs')}
                onProductsClick={() => handleViewChange('products')}
                onProfessionalsClick={() => handleViewChange('professionals')}
              />
              <Calc />
              <Benefits />
              <AppDownload />
            </>
          )}
          {view === 'proLogin' && (
            <ProLogin onBecomePartner={() => handleViewChange('pro')} />
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
        </>
      )}

      {/* Route for ProDash and AddProduct */}
      <Routes>
        <Route path="/proDash" element={<Prodash />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy/>} />
        <Route path='/TermsAndConditions' element={<Tearms/>} />
      </Routes>
    </div>
  );
}

export default App;
