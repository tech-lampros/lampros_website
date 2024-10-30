import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ConsultationForm = ({ closeForm }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setFeedbackMessage(null);

    const message = `Name: ${data.name}, Phone: ${data.phone}, Email: ${data.email}, Place: ${data.place}`;
    const message1 = `Hello ${data.name}, Thanks For Connecting With us , Please Share Your details`;
    const whatsappLink = `https://wa.me/917592900050?text=${encodeURIComponent(
      message
    )}`;

    try {
      // Send message via API
      await axios.get(
        `https://whatsapp-bot-q1u3.onrender.com/send/917994107442/${encodeURIComponent(
          message
        )}`
      );
      await axios.get(
        `https://whatsapp-bot-q1u3.onrender.com/send/91${data.phone}/${encodeURIComponent(
          message1
        )}`
      );

      // Redirect to WhatsApp with the message
      window.open(whatsappLink, '_blank');

      setFeedbackMessage('Successfully submitted! We are trying to reach you.');
      reset(); // Clear the form
    } catch (error) {
      console.error('Form submission error:', error);
      setFeedbackMessage('Submission failed. Please try again.');
    } finally {
      window.open(whatsappLink, '_blank');
      setIsSubmitting(false);
    }
  };

  return (
    <ModalOverlay>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <CloseButton onClick={closeForm}>×</CloseButton>
        <FormTitle>Book a Free Consultation</FormTitle>

        {feedbackMessage && (
          <FeedbackMessage success={feedbackMessage.includes('Success')}>
            {feedbackMessage}
          </FeedbackMessage>
        )}

        <InputField>
          <Input
            placeholder="Enter your name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </InputField>

        <InputField>
          <Input
            type="tel"
            placeholder="Enter your phone number"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Invalid phone number',
              },
            })}
          />
          {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
        </InputField>

        <InputField>
          <Input
            type="email"
            placeholder="Enter your email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputField>

        <InputField>
          <Input
            placeholder="Koduvally, Kozhikode, Kerala"
            {...register('place', { required: 'Place is required' })}
          />
          {errors.place && <ErrorMessage>{errors.place.message}</ErrorMessage>}
        </InputField>

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </SubmitButton>
      </FormContainer>
    </ModalOverlay>
  );
};

export default ConsultationForm;

// Styled Components for the Consultation Form

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1); /* Transparent background */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const FormContainer = styled.form`
  background: linear-gradient(135deg, #f3f4f7, #ffffff);
  padding: 40px;
  border-radius: 12px;
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const FormTitle = styled.h2`
  font-size: 26px;
  font-weight: 700;
  color: #333;
  text-align: center;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  background-color: #f9f9f9;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #ff7a00;
    background-color: #fff;
  }
`;

const SubmitButton = styled.button`
  padding: 16px;
  background-color: #ff7a00;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e67300;
  }

  &:disabled {
    background-color: #ffa566;
    cursor: not-allowed;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

const FeedbackMessage = styled.p`
  color: ${(props) => (props.success ? 'green' : 'red')};
  font-size: 16px;
  text-align: center;
  font-weight: 500;
`;
