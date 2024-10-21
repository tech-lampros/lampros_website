import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ConsultationForm = ({ closeForm }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState(null); // State to manage feedback messages

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setFeedbackMessage(null); // Reset feedback message on submit
    try {
      const message = `Name: ${data.name}, Phone: ${data.phone}, Email: ${data.email}, Place: ${data.place}`;
      const response = await axios.get(
        `https://whatsapp-bot-q1u3.onrender.com/send/917994107442/${encodeURIComponent(message)}`
      );

      setFeedbackMessage('Successfully submitted!'); // Success feedback
      reset(); // Clear the form
    } catch (error) {
      console.error('Form submission error:', error);
      setFeedbackMessage('Submission failed. Please try again.'); // Failure feedback
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <CloseButton onClick={closeForm}>×</CloseButton>
      <FormTitle>Book a free consultation</FormTitle>

      {feedbackMessage && <FeedbackMessage>{feedbackMessage}</FeedbackMessage>}

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
  );
};

export default ConsultationForm;

// Styled Components
const FormContainer = styled.form`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

const FormTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #333;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #ff7a00;
  }
`;

const SubmitButton = styled.button`
  padding: 12px;
  background-color: #ff7a00;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 18px;
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
  color: ${props => (props.error ? 'red' : 'green')};
  font-size: 16px;
  text-align: center;
`;
