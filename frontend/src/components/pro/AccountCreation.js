// src/components/AccountCreation.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import CompanyProfile from './CompanyProfile';
import PlanSelection from './PlanSelection';
import Payment from './Payment'

const AccountCreation = () => {
  const [step, setStep] = useState(1);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Container>
      <Stepper>
        <Step
          active={step === 1}
          filled={step > 1}
          onClick={() => setStep(1)}
        >
          <StepNumber active={step === 1} filled={step > 1} />
          Account creation
        </Step>
        <Step
          active={step === 2}
          filled={step > 2}
          onClick={() => setStep(2)}
        >
          <StepNumber active={step === 2} filled={step > 2} />
          Company Profile
        </Step>
        <Step
          active={step === 3}
          filled={step > 3}
          onClick={() => setStep(3)}
        >
          <StepNumber active={step === 3} filled={step > 3} />
          Plan selection
        </Step>
        <Step
          active={step === 4}
          filled={step > 4}
          onClick={() => setStep(4)}
        >
          <StepNumber active={step === 4} filled={step > 4} />
          Payment
        </Step>
      </Stepper>
      {step === 1 && (
        <FormContainer isMobile={isMobile}>
          <Form>
            <FormRow>
              <FormGroup>
                <Label>Name</Label>
                <Input type="text" placeholder="Enter your name" />
              </FormGroup>
              <FormGroup>
                <Label>Role</Label>
                <Input type="text" placeholder="Eg: Interior Designer" />
              </FormGroup>
            </FormRow>
            <FormRow>
              <FormGroup>
                <Label>Phone Number</Label>
                <Input type="text" placeholder="8023456789" />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input type="email" placeholder="Enter your mail id" />
              </FormGroup>
            </FormRow>
            <FormRow>
              <FormGroup>
                <Label>Place</Label>
                <Input type="text" placeholder="Koduvally, Kozhikode, Kerala" />
              </FormGroup>
              <FormGroup>
                <Label>Age</Label>
                <Input type="number" placeholder="Age" />
              </FormGroup>
              <FormGroup>
                <Label>Gender</Label>
                <Select>
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Select>
              </FormGroup>
            </FormRow>
            <Terms>
              By clicking the button below, you consent to our <a href="#">Terms of Use</a> and for the Lampros family of companies to call or text you using automated technology at the phone numbers you provide, regarding leads and other products and services that may be of interest to you. Consent is not a condition of any purchase. <a href="#">Learn more</a>.
            </Terms>
            <CreateAccountButton onClick={() => setStep(2)}>Create account</CreateAccountButton>
            <LoginLink>Already have an account? <a href="#">Login</a></LoginLink>
          </Form>
          {!isMobile && (
            <InfoBox>
              <InfoTitle>Don't have enough time to finish the signup?</InfoTitle>
              <InfoText>You can just create a profile and then come back later any time to finish the whole process.</InfoText>
            </InfoBox>
          )}
        </FormContainer>
      )}
      {step === 2 && <CompanyProfile setStep={setStep} />}
      {step === 3 && <PlanSelection setStep={setStep} />}
      {step === 4 && <Payment setStep={setStep} />}
      {/* Add more steps as needed */}
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Stepper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  padding: 0 20px;
`;

const Step = styled.div`
  flex: 1;
  text-align: center;
  position: relative;
  padding: 10px;
  color: #000;
  cursor: pointer;

`;

const StepNumber = styled.div`
  width: 24px;
  height: 24px;
  margin: 0 auto;
  border: 2px solid ${({ active }) => (active ? '#FF8F2A' : '#ccc')};
  border-radius: 50%;
  background-color: ${({ filled, active }) => (filled ? '#FF8F2A' : (active ? 'transparent' : 'transparent'))};
  color: ${({ active, filled }) => (filled || active ? '#fff' : '#000')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  max-width: ${({ isMobile }) => (isMobile ? '100%' : '80%')};
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

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Terms = styled.p`
  font-size: 12px;
  color: #555;
  margin-bottom: 20px;
  a {
    color: #007bff;
    text-decoration: none;
  }
`;

const CreateAccountButton = styled.button`
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

const LoginLink = styled.p`
  text-align: center;
  margin-top: 20px;
  a {
    color: #007bff;
    text-decoration: none;
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

export default AccountCreation;
