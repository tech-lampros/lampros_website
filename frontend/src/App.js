import React, { useState } from 'react';
import './App.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'; // Use useNavigate instead of Navigate
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
import Prodash from './components/pro/ProDash';
import AddProduct from './components/pro/AddProduct';
import PrivacyPolicy from './components/Privacy';
import Tearms from './components/Tearms.js';
import Calc from './components/Calc';
import Cookies from 'js-cookie';

function App() {
  const token = Cookies.get('authToken');
  const [view, setView] = useState('home');
  const location = useLocation();
  const navigate = useNavigate(); // useNavigate hook

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const isProDash = location.pathname === '/proDash';
  const isAddProduct = location.pathname === '/add-product';
  const isPrivacy = location.pathname === '/privacy_policy';
  const isTearms = location.pathname === '/TermsAndConditions';

  return (
    <div className="App">
      {!isProDash && !isAddProduct && !isPrivacy && !isTearms && (
        <>
          <div className="desktop-view">
            <Nav
              onHomeClick={() => handleViewChange('home')}
              onJoinAsProClick={() => handleViewChange('pro')}
              onLogin={() => !token ? handleViewChange('proLogin') : navigate('/proDash')}
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
          {view === 'proLogin' && <ProLogin onBecomePartner={() => handleViewChange('pro')} />}
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

      {/* Routes for ProDash, AddProduct, PrivacyPolicy, and TermsAndConditions */}
      <Routes>
        <Route path="/proDash" element={<Prodash />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/TermsAndConditions" element={<Tearms />} />
      </Routes>
    </div>
  );
}

export default App;
