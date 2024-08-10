// src/components/AccountCreation.js

import React, { useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { useForm } from 'react-hook-form';
import CompanyProfile from './CompanyProfile';
import PlanSelection from './PlanSelection';
import Payment from './Payment';

const AccountCreation = () => {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setStep(2);
  };

  return (
    <Container>
      <Stepper>
        <Step active={step === 1} filled={step > 1} onClick={() => setStep(1)}>
          <StepNumber active={step === 1} filled={step > 1} />
          Account creation
        </Step>
        <Step active={step === 2} filled={step > 2} onClick={() => setStep(2)}>
          <StepNumber active={step === 2} filled={step > 2} />
          Company Profile
        </Step>
        <Step active={step === 3} filled={step > 3} onClick={() => setStep(3)}>
          <StepNumber active={step === 3} filled={step > 3} />
          Plan selection
        </Step>
        <Step active={step === 4} filled={step > 4} onClick={() => setStep(4)}>
          <StepNumber active={step === 4} filled={step > 4} />
          Payment
        </Step>
      </Stepper>
      {step === 1 && (
        <FormContainer isMobile={isMobile}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow>
              <FormGroup>
                <InputWrapper>
                  <Input
                    type="text"
                    placeholder=" "
                    {...register('name', { required: 'Name is required' })}
                  />
                  <FloatingLabel>Name</FloatingLabel>
                </InputWrapper>
                {errors.name && <Error>{errors.name.message}</Error>}
              </FormGroup>
              <FormGroup>
                <InputWrapper>
                  <Input
                    type="text"
                    placeholder=" "
                    {...register('role', { required: 'Role is required' })}
                  />
                  <FloatingLabel>Role</FloatingLabel>
                </InputWrapper>
                {errors.role && <Error>{errors.role.message}</Error>}
              </FormGroup>
            </FormRow>
            <FormRow>
              <FormGroup>
                <InputWrapper>
                  <Input
                    type="text"
                    placeholder=" "
                    {...register('phone', { required: 'Phone number is required' })}
                  />
                  <FloatingLabel>Phone Number</FloatingLabel>
                </InputWrapper>
                {errors.phone && <Error>{errors.phone.message}</Error>}
              </FormGroup>
              <FormGroup>
                <InputWrapper>
                  <Input
                    type="email"
                    placeholder=" "
                    {...register('email', { required: 'Email is required' })}
                  />
                  <FloatingLabel>Email</FloatingLabel>
                </InputWrapper>
                {errors.email && <Error>{errors.email.message}</Error>}
              </FormGroup>
            </FormRow>
            <FormRow>
              <FormGroup>
                <InputWrapper>
                  <Input
                    type="text"
                    placeholder=" "
                    {...register('place', { required: 'Place is required' })}
                  />
                  <FloatingLabel>Place</FloatingLabel>
                </InputWrapper>
                {errors.place && <Error>{errors.place.message}</Error>}
              </FormGroup>
              <FormGroup>
                <InputWrapper>
                  <Input
                    type="number"
                    placeholder=" "
                    {...register('age', { required: 'Age is required' })}
                  />
                  <FloatingLabel>Age</FloatingLabel>
                </InputWrapper>
                {errors.age && <Error>{errors.age.message}</Error>}
              </FormGroup>
              <FormGroup>
                <InputWrapper>
                  <Select {...register('gender', { required: 'Gender is required' })}>
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Select>
                  <FloatingLabel>Gender</FloatingLabel>
                </InputWrapper>
                {errors.gender && <Error>{errors.gender.message}</Error>}
              </FormGroup>
            </FormRow>
            <Terms>
              By clicking the button below, you consent to our <a href="#">Terms of Use</a> and for the Lampros family of companies to call or text you using automated technology at the phone numbers you provide, regarding leads and other products and services that may be of interest to you. Consent is not a condition of any purchase. <a href="#">Learn more</a>.
            </Terms>
            <CreateAccountButton type="submit">Create account</CreateAccountButton>
            {/* Removed LoginLink */}
          </Form>
          {!isMobile && (
            <InfoBox>
              <InfoTitle>Don't have enough time to finish the signup?</InfoTitle>
              <InfoText>You can just create a profile and then come back later any time to finish the whole process.</InfoText>
            </InfoBox>
          )}
        </FormContainer>
      )}
      {step === 2 && <CompanyProfile setFormData={setFormData} setStep={setStep} formData={formData} />}
      {step === 3 && <PlanSelection setStep={setStep} formData={formData} setFormData={setFormData} />}
      {step === 4 && <Payment setStep={setStep}  />}
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
  width: 15px;
  height: 15px;
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

const Form = styled.form`
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
  position: relative;
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

const Error = styled.span`
  color: red;
  font-size: 12px;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const FloatingLabel = styled.label`
  position: absolute;
  top: 16px; /* Adjust as needed */
  left: 12px;
  font-size: 16px; /* Adjust as needed */
  color: #999;
  transition: 0.2s ease all;
  pointer-events: none;
  font-weight: bold; /* Make label text bold */
  background: #fff; /* Remove background */
  padding: 0 4px; /* Add padding to remove border line effect */
  z-index: 1; /* Ensure the label is above the input */
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 12px; /* Adjust padding to ensure label fits */
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box; /* Ensure padding and border are included in width */
  
  &:focus ~ ${FloatingLabel},
  &:not(:placeholder-shown) ~ ${FloatingLabel} {
    top: -10px; /* Adjust to position label at the top */
    left: 12px; /* Adjust to align with input */
    font-size: 12px; /* Adjust to make label smaller when floating */
    color: #FF8F2A;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 14px 12px; /* Adjust padding to ensure label fits */
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box; /* Ensure padding and border are included in width */
  
  &:focus ~ ${FloatingLabel},
  &:not(:placeholder-shown) ~ ${FloatingLabel} {
    top: -10px; /* Adjust to position label at the top */
    left: 12px; /* Adjust to align with select */
    font-size: 12px; /* Adjust to make label smaller when floating */
    color: #FF8F2A;
  }
`;

export default AccountCreation;
