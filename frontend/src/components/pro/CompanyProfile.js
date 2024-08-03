// src/components/CompanyProfile.js
import React from 'react';
import styled from 'styled-components';

const CompanyProfile = ({ setStep }) => {
  return (
    <Container>
      <Form>
        <FormRow>
          <FormGroup>
            <Label>Company Name</Label>
            <Input type="text" placeholder="Enter your name" />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" placeholder="Enter your mail id" />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Phone Number</Label>
            <Input type="text" placeholder="8023456789" />
          </FormGroup>
          <FormGroup>
            <Label>Address</Label>
            <Input type="text" placeholder="Enter your address" />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>City</Label>
            <Input type="text" placeholder="Enter your city" />
          </FormGroup>
          <FormGroup>
            <Label>Pincode</Label>
            <Input type="text" placeholder="Enter your pincode" />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>CST Number</Label>
            <Input type="text" placeholder="Enter your CST number" />
          </FormGroup>
        </FormRow>
        <ContinueButton onClick={() => setStep(3)}>Continue</ContinueButton>
      </Form>
      <InfoBox>
        <InfoTitle>Why this matters to home owners?</InfoTitle>
        <InfoText>
          Your Lampros profile is the main source of information on your business to home owners. Having a strong profile helps in gaining trust to home owners who see it.
        </InfoText>
      </InfoBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  max-width: 80%;
  margin: 0 auto;
`;

const Form = styled.div`
  flex: 1;
  padding: 20px;
`;

const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  flex: 1;
  min-width: 220px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ContinueButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #0056b3;
  }
`;

const InfoBox = styled.div`
  width: 300px;
  padding: 20px;
  background: #f9f9f9;
  border-left: 1px solid #eee;
`;

const InfoTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const InfoText = styled.p`
  font-size: 14px;
  color: #555;
`;

export default CompanyProfile;
