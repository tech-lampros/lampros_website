import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { FaSearch, FaUserPlus } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css'; // Ensure this CSS file reflects the dark theme
import logo from '../assets/logo.png';

const NavigationBar = ({ onHomeClick, onJoinAsProClick, onDesignsClick,onLogin, onProductsClick, onProfessionalsClick }) => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Navbar.Brand href="#home" className="custom-brand" onClick={onHomeClick}>
        <img
          src={logo}
          width="100%"
          height="40"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <NavDropdown title="Designs" id="designs-dropdown">
            <NavDropdown.Item onClick={onDesignsClick}>Bedroom Designs</NavDropdown.Item>
            <NavDropdown.Item>Kitchen Designs</NavDropdown.Item>
            <NavDropdown.Item>Bathroom Designs</NavDropdown.Item>
            <NavDropdown.Item>Living Room Designs</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>1BHK Layouts</NavDropdown.Item>
            <NavDropdown.Item>2BHK Layouts</NavDropdown.Item>
            <NavDropdown.Item>3BHK Layouts</NavDropdown.Item>
            <NavDropdown.Item>4BHK Layouts</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Floor Plans</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Professionals" id="professionals-dropdown">
            <NavDropdown.Item>Architect</NavDropdown.Item>
            <NavDropdown.Item>Plumber</NavDropdown.Item>
            <NavDropdown.Item>Electrician</NavDropdown.Item>
            <NavDropdown.Item>Contractors</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Masons</NavDropdown.Item>
            <NavDropdown.Item>Landscapers</NavDropdown.Item>
            <NavDropdown.Item>Flooring Specialist</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Products" id="products-dropdown">
            <NavDropdown.Item>Sanitary</NavDropdown.Item>
            <NavDropdown.Item>Electronics</NavDropdown.Item>
            <NavDropdown.Item>Furniture</NavDropdown.Item>
            <NavDropdown.Item>Flooring</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Plumbing</NavDropdown.Item>
            <NavDropdown.Item>Doors</NavDropdown.Item>
            <NavDropdown.Item>Smart Home Technicians</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Properties & Land" id="properties-dropdown">
            <NavDropdown.Item>Ready to move-in Homes</NavDropdown.Item>
            <NavDropdown.Item>Apartments</NavDropdown.Item>
            <NavDropdown.Item>Villas</NavDropdown.Item>
            <NavDropdown.Item>Land</NavDropdown.Item>
          </NavDropdown>
          <Form inline className="join-pro-form">
            <Button className="Login" onClick={onLogin}>
              Login <FaUserPlus className="join-pro-icon" />
            </Button>
          </Form>
          <Form inline className="join-pro-form">
            <Button className="join-pro-btn" onClick={onJoinAsProClick}>
              Become a partner <FaUserPlus className="join-pro-icon" />
            </Button>
          </Form>
        </Nav>

        <Form inline className={`search-form ml-auto ${searchVisible ? 'show' : 'hide'}`}>
          <FormControl type="text" placeholder="Search" className="search-input" />
          <FaSearch className="search-icon" onClick={toggleSearch} />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
