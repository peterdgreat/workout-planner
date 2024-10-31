// src/App.js
import React, { useState } from 'react';
import FormContainer from './components/FormContainer';
import { Step, StepIndicatorCircle } from './components/Step';
import InputField from './components/InputField';
import SelectField from './components/SelectField';
import Button from './components/Button';
import GenderSelect from './components/GenderSelect';
import GoalSelect from './components/GoalSelect';
import WeightInput from './components/WeightInput'; // Import the new component
import styled from 'styled-components';

const StepIndicator = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 300px;
    margin-top: 20px;
`;

const App = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        age: '',
        gender: '',
        fitness_level: '',
        goals: '',
        height: '',
        weight: 75 // Default weight
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleGenderSelect = (gender) => {
        setFormData({ ...formData, gender });
    };

    const handleGoalSelect = (goal) => {
        setFormData({ ...formData, goals: goal });
    };

    const nextStep = () => {
        setCurrentStep((prevStep) => Math.min(prevStep + 1, 7)); // Ensure it doesn't exceed total steps
    };

    const previousStep = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 0)); // Ensure it doesn't go below 0
    };

    const submitForm = () => {
        console.log(formData); // Replace with actual submission logic
    };

    return (
        <FormContainer>
            <StepIndicator>
                {[...Array(8)].map((_, index) => (
                    <StepIndicatorCircle key={index} active={index === currentStep} />
                ))}
            </StepIndicator>

            <Step active={currentStep === 0}>
                <h2>What is your name?</h2>
                <InputField type="text" name="name" value={formData.name} onChange={handleChange} required />
            </Step>

            <Step active={currentStep === 1}>
                <h2>What is your email?</h2>
                <InputField type="email" name="email" value={formData.email} onChange={handleChange} required />
            </Step>

            <Step active={currentStep === 2}>
                <h2>Create a password</h2>
                <InputField type="password" name="password" value={formData.password} onChange={handleChange} required />
                <InputField type="password" name="password_confirmation" value={formData.password_confirmation} onChange={handleChange} required />
            </Step>

            <Step active={currentStep === 3}>
                <h2>How old are you?</h2>
                <InputField type="number" name="age" value={formData.age} onChange={handleChange} required />
            </Step>

            <Step active={currentStep === 4}>
                <h2>How do you identify?</h2>
                <GenderSelect selectedGender={formData.gender} onSelect={handleGenderSelect} />
            </Step>

            <Step active={currentStep === 5}>
                <GoalSelect
                    selectedGoal={formData.goals}
                    onSelect={handleGoalSelect}
                />
            </Step>

            <Step active={currentStep === 6}>
                <h2>How tall are you?</h2>
                <InputField type="number" name="height" value={formData.height} onChange={handleChange} placeholder="Enter height in cm" required />
            </Step>

            <Step active={currentStep === 7}>
                <WeightInput weight={formData.weight} setWeight={(weight) => setFormData({ ...formData, weight })} />
            </Step>

            <ButtonContainer>
                {currentStep > 0 && <Button onClick={previousStep}>Previous</Button>}
                {currentStep < 7 ? (
                    <Button onClick={nextStep}>Next</Button>
                ) : (
                    <Button onClick={submitForm}>Finish</Button>
                )}
            </ButtonContainer>
        </FormContainer>
    );
};

export default App;