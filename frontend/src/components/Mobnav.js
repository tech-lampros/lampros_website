import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Offcanvas } from 'react-bootstrap';
import { FaSearch, FaUserPlus } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import './Mobnav.css'

function OffcanvasExample({ onHomeClick, onJoinAsProClick, onDesignsClick, onProductsClick, onProfessionalsClick }) {
  const [searchVisible, setSearchVisible] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const handleNavClick = () => {
    // Close the offcanvas menu by setting the state to false
    setShowOffcanvas(false);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary mb-3 custom-navbar">
      <Navbar.Brand href="#home" className="custom-brand d-flex align-items-center">
      <img
        src={logo}
        width="120"
        height="auto"
        className="d-inline-block align-top"
        alt="Logo"
        onClick={onHomeClick}
      />
      <span 
        className="join-pro-btn ms-3 d-flex align-items-center" 
        onClick={() => { 
          onJoinAsProClick(); 
          handleNavClick(); 
        }}
      >
       Become a par..
        <FaUserPlus className="join-pro-icon ms-2" />
      </span>
    </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={() => setShowOffcanvas(true)} />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={showOffcanvas} // Control visibility with state
          onHide={() => setShowOffcanvas(false)} // Close on clicking outside
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel" onClick={() => { onHomeClick(); handleNavClick(); }}>
            <img
        src={logo}
        width="120"
        height="auto"
        className="d-inline-block align-top"
        alt="Logo"
        onClick={onHomeClick}
      />
            </Offcanvas.Title>
            <Button className="join-pro-btn ms-3" onClick={() => { onJoinAsProClick(); handleNavClick(); }}>
              Become a partner <FaUserPlus className="join-pro-icon" />
            </Button>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#home" onClick={() => { onHomeClick(); handleNavClick(); }}>
                Home
              </Nav.Link>
              <Nav.Link href="#designs" onClick={() => { onDesignsClick(); handleNavClick(); }}>
                Designs
              </Nav.Link>
              <Nav.Link href="#professionals" onClick={() => { onProfessionalsClick(); handleNavClick(); }}>
                Professionals
              </Nav.Link>
              <Nav.Link href="#products" onClick={() => { onProductsClick(); handleNavClick(); }}>
                Products
              </Nav.Link>
            </Nav>
            <Form className={`search-form ${searchVisible ? 'show' : 'hide'}`}>
              <FormControl type="text" placeholder="Search" className="search-input" />
              <FaSearch className="search-icon" onClick={toggleSearch} />
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
