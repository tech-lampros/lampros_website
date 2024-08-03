import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch, FaUserPlus } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css'; // Import custom CSS

const NavigationBar = ({ onHomeClick, onJoinAsProClick }) => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Navbar.Brand href="#home" className="custom-brand" onClick={onHomeClick}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlpxTSkrVDWkiPyjEOUGb-Au2kOAQGJbHFcQ&s"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />{' '}
        LAMPROS
      </Navbar.Brand>
      <Form inline className="join-pro-form">
        <Button className="join-pro-btn" onClick={onJoinAsProClick}>
          JOIN AS PRO <FaUserPlus className="join-pro-icon" />
        </Button>
      </Form>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <NavDropdown title="Designs" id="designs-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Professionals" id="professionals-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Products" id="products-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Land & Properties" id="land-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline className="search-form ml-auto">
          <FormControl type="text" placeholder="Search" className="search-input" />
          <FaSearch className="search-icon" />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
