// src/components/CompanyProfile.js
import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const CompanyProfile = ({ setStep, setFormData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setStep(3);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <FormGroup>
            <InputWrapper>
              <Input
                type="text"
                placeholder=" "
                {...register('companyName', { required: 'Company Name is required' })}
              />
              <FloatingLabel>Company Name</FloatingLabel>
            </InputWrapper>
            {errors.companyName && <Error>{errors.companyName.message}</Error>}
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
                {...register('phone', { required: 'Phone Number is required' })}
              />
              <FloatingLabel>Phone Number</FloatingLabel>
            </InputWrapper>
            {errors.phone && <Error>{errors.phone.message}</Error>}
          </FormGroup>
          <FormGroup>
            <InputWrapper>
              <Input
                type="text"
                placeholder=" "
                {...register('address', { required: 'Address is required' })}
              />
              <FloatingLabel>Address</FloatingLabel>
            </InputWrapper>
            {errors.address && <Error>{errors.address.message}</Error>}
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <InputWrapper>
              <Input
                type="text"
                placeholder=" "
                {...register('city', { required: 'City is required' })}
              />
              <FloatingLabel>City</FloatingLabel>
            </InputWrapper>
            {errors.city && <Error>{errors.city.message}</Error>}
          </FormGroup>
          <FormGroup>
            <InputWrapper>
              <Input
                type="text"
                placeholder=" "
                {...register('pincode', { required: 'Pincode is required' })}
              />
              <FloatingLabel>Pincode</FloatingLabel>
            </InputWrapper>
            {errors.pincode && <Error>{errors.pincode.message}</Error>}
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <InputWrapper>
              <Input
                type="text"
                placeholder=" "
                {...register('cstNumber', { required: 'CST Number is required' })}
              />
              <FloatingLabel>CST Number</FloatingLabel>
            </InputWrapper>
            {errors.cstNumber && <Error>{errors.cstNumber.message}</Error>}
          </FormGroup>
        </FormRow>
        <ContinueButton type="submit">Continue</ContinueButton>
      </Form>
      <InfoBox>
        <InfoTitle>Why this matters to home owners?</InfoTitle>
        <InfoText>
          Your Lampros profile is the main source of information on your business to home owners. Having a strong profile helps in gaining trust with home owners who see it.
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
  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
  }
`;

const Form = styled.form`
  flex: 1;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormGroup = styled.div`
  flex: 1;
  min-width: 220px;
  position: relative;
  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const InputWrapper = styled.div`
  position: relative;
`;

const FloatingLabel = styled.label`
  position: absolute;
  top: 16px;
  left: 12px;
  font-size: 16px;
  color: #999;
  transition: 0.2s ease all;
  pointer-events: none;
  font-weight: bold;
  background: #fff;
  padding: 0 4px;
  z-index: 1;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;

  &:focus ~ ${FloatingLabel},
  &:not(:placeholder-shown) ~ ${FloatingLabel} {
    top: -10px;
    left: 12px;
    font-size: 12px;
    color: #FF8F2A;
  }
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
  @media (max-width: 768px) {
    padding: 12px;
    font-size: 14px;
  }
`;

const InfoBox = styled.div`
  width: 300px;
  padding: 20px;
  background: #f9f9f9;
  border-left: 1px solid #eee;
  @media (max-width: 768px) {
    width: 100%;
    border-left: none;
    border-top: 1px solid #eee;
  }
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

export default CompanyProfile;
