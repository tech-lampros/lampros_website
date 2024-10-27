// ProSidebar.js
import React from 'react';
import styled from 'styled-components';
import { FiHome, FiBox, FiClipboard, FiBarChart2, FiUser, FiSettings } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from '../../assets/logo.png';

const ProSidebar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <Sidebar>
      <LogoContainer>
        <Logo src={logo} alt="Lampros Logo" width={250} />
        <BrandName>Seller</BrandName>
      </LogoContainer>
      <NavItem onClick={() => navigate('/proDash')}>
        <FiHome /> Dashboard
      </NavItem>
      <NavItem onClick={() => navigate('/orders')}>
        <FiClipboard /> Orders
      </NavItem>
      <NavItem onClick={() => navigate('/add-product')}>
        <FiBox /> Products
      </NavItem>
      <NavItem onClick={() => navigate('/analytics')}>
        <FiBarChart2 /> Analytics
      </NavItem>
      <NavItem onClick={() => navigate('/profile')}>
        <FiUser /> Profile
      </NavItem>
      <NavItem onClick={() => navigate('/settings')}>
        <FiSettings /> Setting
      </NavItem>
    </Sidebar>
  );
};

export default ProSidebar;

const Sidebar = styled.div`
  width: 250px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const Logo = styled.img`
  width: 40px;
  margin-right: 10px;
`;

const BrandName = styled.h2`
  font-size: 20px;
  color: #ff7a00;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  padding: 10px;
  color: #555;
  font-weight: normal;
  cursor: pointer;
  &:hover {
    color: #ff7a00;
  }
  svg {
    margin-right: 10px;
  }
`;
