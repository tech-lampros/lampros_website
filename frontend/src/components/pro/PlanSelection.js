import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie';

const planPrices = {
  '1 Month': {
    Free: '₹ 0',
    Premium: '₹ 1,999',
    Elite: '₹ 2,999',
  },
  '6 Months': {
    Free: '₹ 0',
    Premium: '₹ 4,999',
    Elite: '₹ 6,999',
  },
  '1 Year': {
    Free: '₹ 0',
    Premium: '₹ 8,999',
    Elite: '₹ 11,999',
  },
};

const PlanSelection = ({ setStep, formData, setFormData }) => {
  // Plan Selection States
  const [selectedDuration, setSelectedDuration] = useState('6 Months');
  const [selectedPlan, setSelectedPlan] = useState('Free');
  const [couponCode, setCouponCode] = useState('');

  // OTP States
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Get the selected plan type from cookies
    const planType = Cookies.get('planType');
    if (planType) {
      setSelectedPlan(planType);
    }
  }, []);

  // Function to send OTP
  const sendOtp = async () => {
    setIsSendingOtp(true);
    setError('');
    try {
      const response = await fetch('https://lampros-backend.vercel.app/api/user/request-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: formData.phone,
        }),
      });

      if (response.ok) {
        setIsOtpSent(true);
        alert('OTP sent successfully!');
      } else {
        const data = await response.json();
        throw new Error(data.message || 'Failed to send OTP.');
      }
    } catch (err) {
      console.error('Error sending OTP:', err);
      setError(err.message || 'Failed to send OTP. Please try again.');
    } finally {
      setIsSendingOtp(false);
    }
  };

  // Function to verify OTP
  const verifyOtp = async () => {
    setIsVerifyingOtp(true);
    setError('');
    try {
      const response = await fetch('https://lampros-backend.vercel.app/api/user/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: formData.phone,
          otp: otp,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsOtpVerified(true);
        alert('OTP verified successfully!');
      } else {
        throw new Error(data.message || 'Invalid OTP.');
      }
    } catch (err) {
      console.error('Error verifying OTP:', err);
      setError(err.message || 'Invalid OTP. Please try again.');
    } finally {
      setIsVerifyingOtp(false);
    }
  };

  // Function to handle plan submission
  const handleContinue = async () => {
    const updatedFormData = {
      phoneNumber: formData.phone,
      fname: formData.name,
      lname: 'ㅤ',
      email: formData.email,
      type: formData.role,
      companyDetails: {
        companyName: formData.companyName,
        companyAddress: {
          place: formData.company_address,
          pincode: formData.company_pincode,
        },
        companyEmail: formData.company_email,
        companyPhone: formData.company_phone,
        companyGstNumber: formData.company_gstNumber,
      },
      address: {
        place: formData.place,
        pincode: formData.pincode || '',
      },
      profileImage:
        'https://placehold.co/600x600/D8D2C2/4A4947/png?font=lora&text=user',
      plan: selectedPlan,
      duration: selectedDuration,
      couponCode: couponCode,
    };

    setFormData(updatedFormData);

    if (selectedPlan !== 'Free') {
      console.log(updatedFormData);
      alert(`Plan: ${selectedPlan}, Duration: ${selectedDuration}`);
      // Proceed to payment step
      setStep(prev => prev + 1);
    } else {
      console.log({
        ...updatedFormData,
        role: Cookies.get('selectedUserType') || 'Unknown',
      });
      try {
        const response = await fetch('https://lampros-backend.vercel.app/api/user/complete-registration', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...updatedFormData,
            role: Cookies.get('selectedUserType') || 'Unknown',
          }),
        });

        if (!response.ok) {
          alert('Something Went Wrong ' + response.status)
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        Cookies.remove('selectedUserType');
        console.log('Success:', result);
        alert("Registered successfully");
        // Proceed to the next step if successful
        setStep(prev => prev + 1);
      } catch (error) {
        console.error('Error:', error);
        setError('Registration failed. Please try again.');
      }
    }
  };

  return (
    <Container>
      <Title>Select your Pro Plan</Title>

      {/* OTP Verification Section */}
      {!isOtpVerified && (
        <OtpSectionContainer>
          {!isOtpSent && (
            <SendOtpContainer>
              <SendOtpButton onClick={sendOtp} disabled={isSendingOtp}>
                {isSendingOtp ? 'Sending OTP...' : 'Send OTP'}
              </SendOtpButton>
            </SendOtpContainer>
          )}

          {isOtpSent && !isOtpVerified && (
            <VerifyOtpContainer>
              <OtpInput
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={4}
              />
              <VerifyOtpButton onClick={verifyOtp} disabled={isVerifyingOtp || otp.length !== 4}>
                {isVerifyingOtp ? 'Verifying...' : 'Verify OTP'}
              </VerifyOtpButton>
            </VerifyOtpContainer>
          )}

          {error && <ErrorMessage>{error}</ErrorMessage>}
        </OtpSectionContainer>
      )}

      {/* Plan Selection and Submission Section */}
      {isOtpVerified && (
        <>
          <DurationTabs>
            {Object.keys(planPrices).map((duration) => (
              <DurationTab
                key={duration}
                active={selectedDuration === duration}
                onClick={() => setSelectedDuration(duration)}
              >
                {duration}
              </DurationTab>
            ))}
          </DurationTabs>

          <PlanContainer>
            {Object.keys(planPrices[selectedDuration]).map((plan) => (
              <PlanCard
                key={plan}
                selected={selectedPlan === plan}
                onClick={() => {
                  setSelectedPlan(plan);
                  Cookies.set('planType', plan); // Set the selected plan type in cookies
                }}
              >
                <RadioCircle>
                  <input
                    type="radio"
                    name="plan"
                    checked={selectedPlan === plan}
                    readOnly
                  />
                </RadioCircle>
                <PlanHeader>{plan}</PlanHeader>
                <PlanPrice>
                  {planPrices[selectedDuration][plan]}{' '}
                  {plan !== 'Free' && (
                    <>
                      <OldPrice>₹ 4,999</OldPrice> + GST
                    </>
                  )}
                </PlanPrice>
                <PlanDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </PlanDescription>
                <PlanLink href="#">Learn more</PlanLink>
              </PlanCard>
            ))}
          </PlanContainer>

          <CouponSection>
            <CouponInput
              type="text"
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
          </CouponSection>

          <ContinueButton
            onClick={handleContinue}
            freePlan={selectedPlan === 'Free'}
            disabled={selectedPlan !== 'Free' && selectedPlan === ''}
          >
            {selectedPlan === 'Free' ? 'Activate Email' : 'Continue to Payment'}
          </ContinueButton>

          <DetailsHeader>PLAN DETAILS</DetailsHeader>
          <DetailsTableContainer>
            <DetailsTable>
              <TableRow>
                <TableHeader></TableHeader>
                <TableHeader>Free</TableHeader>
                <TableHeader>Premium</TableHeader>
                <TableHeader>Elite</TableHeader>
              </TableRow>
              <TableRow>
                <TableCell>Enhanced profile</TableCell>
                <TableCell className="tick">✓</TableCell>
                <TableCell className="tick">✓</TableCell>
                <TableCell className="tick">✓</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Unlimited product listing or Service listing</TableCell>
                <TableCell className="tick">✓</TableCell>
                <TableCell className="tick">✓</TableCell>
                <TableCell className="tick">✓</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Product Listing Priority</TableCell>
                <TableCell className="tick">✓</TableCell>
                <TableCell className="tick">✓</TableCell>
                <TableCell className="tick">✓</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Analytics</TableCell>
                <TableCell className="tick">✓</TableCell>
                <TableCell className="tick">✓</TableCell>
                <TableCell className="tick">✓</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Customized profile page</TableCell>
                <TableCell className="tick">✓</TableCell>
                <TableCell className="tick">✓</TableCell>
                <TableCell className="tick">✓</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dedicated accounts manager</TableCell>
                <TableCell className="cross">✕</TableCell>
                <TableCell className="tick">✓</TableCell>
                <TableCell className="tick">✓</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Training and webinar</TableCell>
                <TableCell className="tick">✓</TableCell>
                <TableCell className="tick">✓</TableCell>
                <TableCell className="tick">✓</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Multi-Location assistance</TableCell>
                <TableCell className="cross">✕</TableCell>
                <TableCell className="tick">✓</TableCell>
                <TableCell className="tick">✓</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Priority booking</TableCell>
                <TableCell className="cross">✕</TableCell>
                <TableCell className="tick">✓</TableCell>
                <TableCell className="tick">✓</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Enhanced lead management</TableCell>
                <TableCell className="cross">✕</TableCell>
                <TableCell className="tick">✓</TableCell>
                <TableCell className="tick">✓</TableCell>
              </TableRow>
              <TableRow>
                <TableHeader>Visibility</TableHeader>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Boosted visibility</TableCell>
                <TableCell className="cross">✕</TableCell>
                <TableCell className="tick">✓</TableCell>
                <TableCell className="tick">2x</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ad credits</TableCell>
                <TableCell className="cross">✕</TableCell>
                <TableCell className="tick">✓</TableCell>
                <TableCell className="tick">✓</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Custom promotional campaigns</TableCell>
                <TableCell className="cross">✕</TableCell>
                <TableCell className="tick">✓</TableCell>
                <TableCell className="tick">✓</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Networking events</TableCell>
                <TableCell className="cross">✕</TableCell>
                <TableCell className="tick">✓</TableCell>
                <TableCell className="tick">✓</TableCell>
              </TableRow>
              <TableRow>
                <TableHeader>Client Requirements</TableHeader>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Access to exclusive content</TableCell>
                <TableCell className="cross">✕</TableCell>
                <TableCell className="tick">✓</TableCell>
                <TableCell className="tick">✓</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Exclusive deals</TableCell>
                <TableCell className="cross">✕</TableCell>
                <TableCell className="tick">✓</TableCell>
                <TableCell className="tick">✓</TableCell>
              </TableRow>
              <TableRow>
                <TableHeader>Cost</TableHeader>
                <TableCell></TableCell>
                <TableCell>4,999 + GST</TableCell>
                <TableCell>14,999 + GST</TableCell>
              </TableRow>
            </DetailsTable>
          </DetailsTableContainer>
        </>
      )}
    </Container>
  );
};

// Styled Components

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// OTP Section Styles
const OtpSectionContainer = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;

const SendOtpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SendOtpButton = styled.button`
  padding: 12px 25px;
  background-color: #2196F3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  width: 200px;

  &:hover {
    background-color: #1976D2;
  }

  &:disabled {
    background-color: #90CAF9;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const VerifyOtpContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const OtpInput = styled.input`
  padding: 10px;
  width: 200px;
  max-width: 250px;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
  font-size: 1rem;

  @media (max-width: 768px) {
    width: 80%;
    margin-right: 0;
  }
`;

const VerifyOtpButton = styled.button`
  padding: 10px 20px;
  background-color: #FF9800;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  width: 150px;

  &:hover {
    background-color: #F57C00;
  }

  &:disabled {
    background-color: #FFCC80;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-top: 15px;
  font-weight: bold;
`;

// Plan Selection Styles
const DurationTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

const DurationTab = styled.button`
  background: ${({ active }) => (active ? '#4CAF50' : '#f1f1f1')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
  font-size: 1.25rem;
  border: none;
  transition: background-color 0.3s ease;
  min-width: 100px;

  &:hover {
    background: #4CAF50;
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 8px 15px;
    width: 100%;
  }
`;

const PlanContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PlanCard = styled.div`
  background: ${({ selected }) => (selected ? '#4CAF50' : '#f9f9f9')};
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
  border-radius: 15px;
  padding: 20px;
  margin: 10px;
  width: 30%;
  min-width: 250px;
  cursor: pointer;
  text-align: center;
  box-shadow: ${({ selected }) => (selected ? '0px 4px 20px rgba(0, 0, 0, 0.2)' : '0px 2px 10px rgba(0, 0, 0, 0.1)')};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: 10px 0;
  }
`;

const RadioCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;

  input[type='radio'] {
    transform: scale(1.3);
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const PlanHeader = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const PlanPrice = styled.p`
  font-size: 1.25rem;
  margin-bottom: 15px;
  position: relative;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;

const OldPrice = styled.span`
  font-size: 1rem;
  text-decoration: line-through;
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
`;

const PlanDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
  color: ${({ selected }) => (selected ? '#fff' : '#555')};

  @media (max-width: 768px) {
    font-size: 0.875rem;
    margin-bottom: 8px;
  }
`;

const PlanLink = styled.a`
  color: ${({ selected }) => (selected ? '#fff' : '#4CAF50')};
  text-decoration: underline;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

// Coupon Section Styles
const CouponSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const CouponInput = styled.input`
  padding: 10px;
  width: 50%;
  max-width: 400px;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;

  @media (max-width: 768px) {
    width: 80%;
    margin-right: 0;
  }
`;

// Continue Button Styles
const ContinueButton = styled.button`
  background-color: ${({ freePlan }) => (freePlan ? '#FF6F61' : '#4CAF50')};
  color: white;
  font-size: 1.25rem;
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  margin: 20px auto;
  display: block;
  transition: background-color 0.3s ease;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${({ freePlan }) => (freePlan ? '#e55e51' : '#388E3C')};
  }

  &:disabled {
    background-color: #A5D6A7;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 10px 20px;
  }
`;

// Plan Details Styles
const DetailsHeader = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  margin-top: 30px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-top: 20px;
  }
`;

const DetailsTableContainer = styled.div`
  overflow-x: auto;
`;

const DetailsTable = styled.table`
  width: 100%;
  margin: 20px 0;
  border-collapse: collapse;

  th, td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    font-size: 1rem;
    white-space: nowrap;

    @media (max-width: 768px) {
      padding: 10px;
      font-size: 0.875rem;
    }
  }

  th {
    background-color: #f2f2f2;
    color: #333;
  }

  .tick {
    color: green;
    font-weight: bold;
  }

  .cross {
    color: red;
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: #fafafa;
  }
`;

const TableRow = styled.tr``;

const TableHeader = styled.th``;

const TableCell = styled.td``;

export default PlanSelection;
