import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie'; // Import js-cookie

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

  useEffect(() => {
    // Get the selected plan type from cookies
    const planType = Cookies.get('planType');
    if (planType) {
      setSelectedPlan(planType);
    }
  }, []);

  const handleContinue = async () => {
    const updatedFormData = {
      ...formData,
      plan: selectedPlan,
      duration: selectedDuration,
    };

    setFormData(updatedFormData);

    if (selectedPlan !== 'Free') {
      console.log(updatedFormData);
      alert(`Plan: ${selectedPlan}, Duration: ${selectedDuration}`);
    } else {
      console.log({
        ...updatedFormData,
        type: Cookies.get('selectedUserType') || 'Unknown', // Send the plan type from cookies
      })
      try {
        const response = await fetch('https://lampros-backend.vercel.app/api/advanced-users/create-advanced-user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...updatedFormData,
            type: Cookies.get('selectedUserType') || 'Unknown', // Send the plan type from cookies
          }),
        });

        if (!response.ok) {
          document.cookie = `selectedUserType=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        document.cookie = `selectedUserType=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
        console.log('Success:', result);
        alert("Registered successfully") // Proceed to the next step if successful
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
            onClick={() => {
              setSelectedPlan(plan);// Set the selected plan type in cookies
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
                  <OldPrice>₹ 4,999</OldPrice> +GST
                </>
              )}
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
            <TableHeader>Client requirements</TableHeader>
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
      </PlanDetails>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const DurationTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const DurationTab = styled.button`
  background: ${({ active }) => (active ? '#4CAF50' : '#f1f1f1')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5px;
  font-size: 1.25rem;
  border: none;
  transition: background-color 0.3s ease;

  &:hover {
    background: #4CAF50;
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 8px 15px;
  }
`;

const PlanContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PlanCard = styled.div`
  background: ${({ selected }) => (selected ? '#4CAF50' : '#f1f1f1')};
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
  border-radius: 15px;
  padding: 20px;
  margin: 10px;
  width: 30%;
  min-width: 250px;
  cursor: pointer;
  text-align: center;
  box-shadow: ${({ selected }) => (selected ? '0px 4px 20px rgba(0, 0, 0, 0.2)' : 'none')};
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
  margin-bottom: 20px;

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

  @media (max-width: 768px) {
    font-size: 0.875rem;
    margin-bottom: 8px;
  }
`;

const PlanLink = styled.a`
  color: #4CAF50;
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

const PlanDetails = styled.div`
  margin-top: 40px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const ContinueButton = styled.button`
  background-color: ${({ freePlan }) => (freePlan ? '#FF6F61' : '#4CAF50')};
  color: white;
  font-size: 1.5rem;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  display: block;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ freePlan }) => (freePlan ? '#e55e51' : '#388E3C')};
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
    padding: 12px 25px;
  }
`;

const DetailsHeader = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  margin-top: 30px;

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

    @media (max-width: 768px) {
      padding: 10px;
      font-size: 0.875rem;
    }
  }

  th {
    background-color: #f2f2f2;
  }

  .tick {
    color: green;
  }

  .cross {
    color: red;
  }
`;

const TableRow = styled.tr``;

const TableHeader = styled.th``;

const TableCell = styled.td``;

export default PlanSelection;
