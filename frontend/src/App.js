import React from 'react';
import './App.css';
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';

import Cookies from 'js-cookie';

// Import Components
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

function App() {
  const token = Cookies.get('authToken');
  const location = useLocation();
  const navigate = useNavigate();

  // Determine if the current path requires hiding Nav and Footer
  const hideNavFooter = ['/proDash', '/add-product', '/privacy_policy', '/TermsAndConditions'].includes(location.pathname);

  return (
    <div className="App">
      {/* Conditionally render Nav and Footer based on the current route */}
      {!hideNavFooter && (
        <>
          {/* Desktop Navigation */}
          <div className="desktop-view">
            <Nav
              onHomeClick={() => navigate('/')}
              onJoinAsProClick={() => navigate(token ? '/proDash' : '/proLogin')}
              onLogin={() => navigate(token ? '/proDash' : '/proLogin')}
              onDesignsClick={() => navigate('/designs')}
              onProductsClick={() => navigate('/products')}
              onProfessionalsClick={() => navigate('/professionals')}
            />
          </div>

          {/* Mobile Navigation */}
          <div className="mobile-view">
            <Mobnav
              onHomeClick={() => navigate('/')}
              onJoinAsProClick={() => navigate(token ? '/proDash' : '/proLogin')}
              onDesignsClick={() => navigate('/designs')}
              onProductsClick={() => navigate('/products')}
              onProfessionalsClick={() => navigate('/professionals')}
            />
          </div>
        </>
      )}

      {/* Define Routes */}
      <Routes>
        {/* Public Routes */}
        // <Route
        //   path="/"
        //   element={
        //     <>
        //       <LandCarousel />
        //       <Explore
        //         onDesignsClick={() => navigate('/designs')}
        //         onProductsClick={() => navigate('/products')}
        //         onProfessionalsClick={() => navigate('/professionals')}
        //       />
        //       <Calc />
        //       <Benefits />
        //       <AppDownload />
        //     </>
        //   }
        // />
        // <Route path="/designs" element={<DesignsPage />} />
        // <Route path="/products" element={<ProductsPage />} />
        // <Route path="/professionals" element={<Professionals />} />
        // <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        // <Route path="/TermsAndConditions" element={<Tearms />} />

        // {/* Professional Routes */}
        // <Route
        //   path="/proLogin"
        //   element={<ProLogin onBecomePartner={() => navigate('/pro')} />}
        // />
        // <Route
        //   path="/pro"
        //   element={<ProHome onGetStarted={() => navigate('/accountCreation')} />}
        // />
        // <Route path="/accountCreation" element={<AccountCreation />} />
        // <Route path="/proDash" element={<Prodash />} />
        // <Route path="/add-product" element={<AddProduct />} />

        {/* Redirect unknown routes to home or a 404 component */}
        // <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/privacy_policy" replace />} />
      </Routes>

      {/* Conditionally render Footer */}
      {!hideNavFooter && (
        <>
          <div className="desktop-view">
            <Footer />
          </div>
          <div className="mobile-view">
            <FooterMob />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
