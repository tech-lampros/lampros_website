import React, { useState } from 'react';
import styled from 'styled-components';

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
  const [selectedDuration, setSelectedDuration] = useState('6 Months');
  const [selectedPlan, setSelectedPlan] = useState('Free');

  const handleContinue = async () => {
    const updatedFormData = {
      ...formData,
      plan: selectedPlan,
      duration: selectedDuration,
    };

    setFormData(updatedFormData);

    if (selectedPlan === 'Free') {
      console.log(updatedFormData);
      alert(`Plan: ${selectedPlan}, Duration: ${selectedDuration}`);
    } else {
      try {
        const response = await fetch('https://your-api-endpoint.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedFormData),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Success:', result);
        setStep(4); // Proceed to the next step if successful
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <Container>
      <Title>Select your Pro plan</Title>
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
            onClick={() => setSelectedPlan(plan)}
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
              {planPrices[selectedDuration][plan]} {plan !== 'Free' && <OldPrice>₹ 4,999</OldPrice>} +GST
            </PlanPrice>
            <PlanDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </PlanDescription>
            <PlanLink>Learn more</PlanLink>
          </PlanCard>
        ))}
      </PlanContainer>
      <PlanDetails>
        <ContinueButton
          onClick={handleContinue}
          freePlan={selectedPlan === 'Free'}
        >
          {selectedPlan === 'Free' ? 'Activate Email' : 'Continue to Payment'}
        </ContinueButton>
        <DetailsHeader>PLAN DETAILS</DetailsHeader>
        <DetailsTable>
          <TableRow>
            <TableHeader></TableHeader>
            <TableHeader>Free</TableHeader>
            <TableHeader>Premium</TableHeader>
            <TableHeader>Elite</TableHeader>
          </TableRow>
          <TableRow>
            <TableCell>Enhanced profile</TableCell>
            <TableCell>✓</TableCell>
            <TableCell>✓</TableCell>
            <TableCell>✓</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Unlimited products per listing</TableCell>
            <TableCell></TableCell>
            <TableCell>✓</TableCell>
            <TableCell>✓</TableCell>
          </TableRow>
          {/* Continue for all features */}
        </DetailsTable>
      </PlanDetails>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 28px;
  color: #333;
`;

const DurationTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 10px;
`;

const DurationTab = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#007bff' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#007bff')};
  border: 1px solid #007bff;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: ${({ active }) => (active ? '#0056b3' : '#e6f7ff')};
    color: ${({ active }) => (active ? '#fff' : '#0056b3')};
  }
`;

const PlanContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PlanCard = styled.div`
  width: 280px;
  padding: 20px;
  background: ${({ selected }) => (selected ? '#e6f7ff' : '#fff')};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  transition: background 0.3s, box-shadow 0.3s;
  &:hover {
    background: #f0f8ff;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const RadioCircle = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  input {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`;

const PlanHeader = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  font-size: 20px;
  color: #333;
`;

const PlanPrice = styled.p`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: #007bff;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: #ccc;
  margin-left: 10px;
  font-size: 18px;
`;

const PlanDescription = styled.p`
  text-align: center;
  margin-bottom: 20px;
  color: #666;
`;

const PlanLink = styled.a`
  display: block;
  text-align: center;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const PlanDetails = styled.div`
  margin-top: 40px;
`;

const DetailsHeader = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 22px;
  color: #333;
`;

const DetailsTable = styled.div`
  width: 100%;
  display: table;
  table-layout: fixed;
  border-collapse: collapse;
  border: 1px solid #ccc;
`;

const TableRow = styled.div`
  display: table-row;
`;

const TableHeader = styled.div`
  display: table-cell;
  padding: 10px;
  font-weight: bold;
  background: #f4f4f4;
  border: 1px solid #ccc;
  text-align: center;
`;

const TableCell = styled.div`
  display: table-cell;
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
  color: #333;
`;

const ContinueButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: ${({ freePlan }) => (freePlan ? '#28a745' : '#ff9900')};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  margin-bottom: 20px;
  &:hover {
    background-color: ${({ freePlan }) => (freePlan ? '#218838' : '#cc7a00')};
  }
`;

export default PlanSelection;
