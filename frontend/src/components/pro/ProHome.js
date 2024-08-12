// src/components/ProHome.js
import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import Cookies from 'js-cookie';
import img10 from '../../assets/img10.jpg'; // Replace with the actual path
import img11 from '../../assets/img11.jpg'; // Replace with the actual path
import img12 from '../../assets/img12.jpg'; // Replace with the actual path

const ProHome = ({ onGetStarted }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const handleGetStarted = (type) => {
    // Set the selected type in a cookie
    Cookies.set('selectedUserType', type, { expires: 7 }); // Cookie expires in 7 days
    // Call the onGetStarted callback
    onGetStarted();
  };

  return (
    <Container>
      <Banner>
        <img src="https://placehold.co/2000x300" alt="Banner" />
      </Banner>
      <Title>What type of Pro are you?</Title>
      <Subtitle>
        Start growing your business by becoming a member and connect with possible customers easily across the platform.
      </Subtitle>
      <CardContainer isMobile={isMobile}>
        <Card>
          <img src={img10} alt="Professionals" />
          <CardTitle>Professionals</CardTitle>
          <Button onClick={() => handleGetStarted('Professionals')}>Get started</Button>
        </Card>
        <Card>
          <img src={img11} alt="Product Sellers" />
          <CardTitle>Product Sellers</CardTitle>
          <Button onClick={() => handleGetStarted('Product Sellers')}>Get started</Button>
        </Card>
        <Card>
          <img src={img12} alt="Realtor" />
          <CardTitle>Realtor</CardTitle>
          <Button onClick={() => handleGetStarted('Realtor')}>Get started</Button>
        </Card>
      </CardContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #FFFBFB;
  padding: 20px;
  text-align: center;
`;

const Banner = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

const Title = styled.h1`
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  margin: 10px 0 30px 0;
  font-size: 16px;
  color: #555;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: ${({ isMobile }) => (isMobile ? 'wrap' : 'nowrap')};
`;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  text-align: center;
  img {
    width: 100%;
    height: auto;
  }
`;

const CardTitle = styled.h3`
  margin: 10px 0;
  font-size: 18px;
`;

const Button = styled.button`
  background-color: #ff7a00;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 20px 0;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #ff6500;
  }
`;

export default ProHome;
