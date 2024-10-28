import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Cookies from 'js-cookie';

const ProLogin = ({ onBecomePartner }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const navigate = useNavigate(); 

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const requestOtp = async () => {
    try {
      await axios.post('https://lampros-backend.vercel.app/api/user/request-otp', { phoneNumber });
      setOtpSent(true);
      let timer = resendTimer;
      const countdown = setInterval(() => {
        timer -= 1;
        setResendTimer(timer);
        if (timer <= 0) {
          clearInterval(countdown);
        }
      }, 1000);
    } catch (error) {
      console.error('Failed to send OTP:', error);
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post('https://lampros-backend.vercel.app/api/user/verify-otp', {
        phoneNumber,
        otp,
      });
  
      const { token } = response.data; // Assuming the token is returned in the response
      if (token) {
        Cookies.set('authToken', token, { expires: 7, secure: true, sameSite: 'strict' }); 
        console.log('Token stored in cookies');
      }
  
      navigate('/proDash'); // Navigate to ProDash on successful login
    } catch (error) {
      console.error('Failed to verify OTP:', error);
    }
  };

  return (
    <Container>
      <LoginForm>
        <LeftPanel>
          <FormContainer>
            <Title>Welcome back!</Title>
            <Subtitle>Enter your Credentials to access your Lampros Seller account</Subtitle>

            <InputField
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={handlePhoneChange}
            />

            {otpSent && (
              <InputField
                type="text"
                placeholder="OTP"
                value={otp}
                onChange={handleOtpChange}
              />
            )}

            {!otpSent ? (
              <Button onClick={requestOtp}>Continue</Button>
            ) : (
              <Button onClick={verifyOtp}>Continue</Button>
            )}

            {otpSent && <ResendInfo>Resend the OTP in {resendTimer}s</ResendInfo>}

            <BecomePartner>
              Don't have an account?{' '}
              <PartnerLink onClick={onBecomePartner}>
                Become a partner
              </PartnerLink>
            </BecomePartner>
          </FormContainer>
        </LeftPanel>
        <RightPanel />
      </LoginForm>
    </Container>
  );
};
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
`;

const LoginForm = styled.div`
  display: flex;
  width: 1000px;
  height: 600px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

const LeftPanel = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #777;
  margin-bottom: 30px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
  color: #555;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #ff7a00;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #ff6500;
  }
`;

const ResendInfo = styled.p`
  font-size: 14px;
  color: #777;
  margin-top: 10px;
`;

const BecomePartner = styled.p`
  font-size: 14px;
  margin-top: 20px;
`;

const PartnerLink = styled.span`
  color: #ff7a00;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: #ff6500;
  }
`;

const RightPanel = styled.div`
  flex: 1;
  background-color: #ff7a00;
`;

export default ProLogin;
