// src/components/PlanSelection.js
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

const PlanSelection = ({ setStep }) => {
  const [selectedDuration, setSelectedDuration] = useState('6 Months');
  const [selectedPlan, setSelectedPlan] = useState('Elite');

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
      <ContinueButton onClick={() => setStep(4)}>Continue to Payment</ContinueButton>
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
`;

const DurationTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const DurationTab = styled.div`
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#007bff' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#007bff')};
  border: 1px solid #007bff;
  border-radius: 5px;
  &:hover {
    background-color: ${({ active }) => (active ? '#0056b3' : '#e6f7ff')};
  }
`;

const PlanContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PlanCard = styled.div`
  width: 30%;
  padding: 20px;
  background: ${({ selected }) => (selected ? '#e6f7ff' : '#fff')};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  cursor: pointer;
  position: relative;

  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 20px;
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
`;

const PlanPrice = styled.p`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
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
`;

const ContinueButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #ff9900;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #cc7a00;
  }
`;

export default PlanSelection;
