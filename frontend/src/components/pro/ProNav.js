import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { FaSearch } from 'react-icons/fa';

const currentDate = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

const ProNav = () => (
  <Header>
    <HeaderLeft>
      <Logo src={logo} alt="Logo" />
      <SearchBox>
        <FaSearch />
        <SearchInput type="text" placeholder="Search..." aria-label="Search" />
      </SearchBox>
      <DateDisplay>{currentDate}</DateDisplay>
    </HeaderLeft>
    <HeaderRight>
      <ProfileContainer>
        <ProfileImage src="/path-to-profile.png" alt="Profile" />
        <UserName>Alex</UserName>
      </ProfileContainer>
    </HeaderRight>
  </Header>
);

export default ProNav;

// Styled Components

// Header Styles
const Header = styled.header`
  background-color: #ffffff;
  padding: 20px 40px;
  margin: 20px;
  margin-left: 60px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Header Left Section
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

// Logo Styles
const Logo = styled.img`
  height: 30px;
  border-radius: 8px;
`;

// Search Box Styles
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f3f5;
  padding: 8px 12px;
  border-radius: 8px;
  width: 300px;

  svg {
    margin-right: 8px;
    color: #888;
  }
`;

// Search Input Styles
const SearchInput = styled.input`
  border: none;
  background: none;
  width: 100%;
  outline: none;
  font-size: 16px;
`;

// Date Display Styles
const DateDisplay = styled.div`
  font-size: 16px;
  color: #555;
`;

// Header Right Section
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

// Profile Container Styles
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

// Profile Image Styles
const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

// User Name Styles
const UserName = styled.span`
  font-size: 16px;
  color: #333;
  font-weight: 500;
`;
