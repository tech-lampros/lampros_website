// src/components/PlanSelection.js
import React from 'react';
import styled from 'styled-components';

const PlanSelection = () => {
  return (
    <Container>
      <Message>We are currently performing maintenance. Please check back later.</Message>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Message = styled.h1`
  color: #ff9900;
  font-size: 24px;
  margin: 50px 0;
`;

export default PlanSelection;
