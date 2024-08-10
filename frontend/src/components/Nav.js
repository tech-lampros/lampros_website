import React,{useState} from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch, FaUserPlus } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css'; // Import custom CSS
import logo from '../assets/logo.png';

const NavigationBar = ({ onHomeClick, onJoinAsProClick, onDesignsClick, onProductsClick, onProfessionalsClick }) => {
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
          <Nav.Link onClick={onDesignsClick}>
            Designs
          </Nav.Link>
          <Nav.Link onClick={onProfessionalsClick}>
            Professionals
          </Nav.Link>
          <Nav.Link onClick={onProductsClick}>
            Products
          </Nav.Link>
         
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
