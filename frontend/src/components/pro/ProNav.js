import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import Cookies from 'js-cookie';

const currentDate = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

const ProNav = () => {
  const [user, setUser] = useState({ fname: '', lname: '', profileImage: '' });

  // Fetch user info from API
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = Cookies.get('authToken'); // Retrieve token from cookies
        const response = await axios.get('https://lampros-backend.vercel.app/api/user/protected-route', {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token in the header
          },
        });
        const { fname, lname, profileImage } = response.data;
        setUser({ fname, lname, profileImage });
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
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
          <ProfileImage src={user.profileImage || '/path-to-default-profile.png'} alt="Profile" />
          <UserName>{user.fname} {user.lname}</UserName>
        </ProfileContainer>
      </HeaderRight>
    </Header>
  );
};

export default ProNav;

// Styled Components

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

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Logo = styled.img`
  height: 30px;
  border-radius: 8px;
`;

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

const SearchInput = styled.input`
  border: none;
  background: none;
  width: 100%;
  outline: none;
  font-size: 16px;
`;

const DateDisplay = styled.div`
  font-size: 16px;
  color: #555;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

const UserName = styled.span`
  font-size: 16px;
  color: #333;
  font-weight: 500;
`;
