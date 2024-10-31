// src/components/WeightInput.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
`;

const Slider = styled.input`
    -webkit-appearance: none;
    width: 100%;
    height: 8px;
    border-radius: 5px;
    background: #e0e0e0;
    outline: none;
    opacity: 0.7;
    transition: opacity .2s;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #6200ea;
        cursor: pointer;
    }

    &::-moz-range-thumb {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #6200ea;
        cursor: pointer;
    }
`;

const WeightLabel = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0;
`;

const UnitToggle = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 0;
`;

const UnitButton = styled.button`
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: ${props => (props.selected ? '#6200ea' : '#f0f0f0')};
    color: ${props => (props.selected ? 'white' : 'black')};
    cursor: pointer;
    margin: 0 5px;
`;

const WeightInput = ({ weight, setWeight }) => {
    const [unit, setUnit] = useState('kg');

    const handleSliderChange = (e) => {
        setWeight(e.target.value);
    };

    const toggleUnit = (selectedUnit) => {
        setUnit(selectedUnit);
        if (selectedUnit === 'lb') {
            setWeight((weight * 2.20462).toFixed(2)); // Convert kg to lb
        } else {
            setWeight((weight / 2.20462).toFixed(2)); // Convert lb to kg
        }
    };

    return (
        <Container>
            <h2>How much your weight?</h2>
            <p>This is used to set up recommendations just for you.</p>
            <WeightLabel>{weight} {unit}</WeightLabel>
            <Slider
                type="range"
                min={30}
                max={200}
                value={weight}
                onChange={handleSliderChange}
            />
            <UnitToggle>
                <UnitButton selected={unit === 'kg'} onClick={() => toggleUnit('kg')}>KG</UnitButton>
                <UnitButton selected={unit === 'lb'} onClick={() => toggleUnit('lb')}>LB</UnitButton>
            </UnitToggle>
        </Container>
    );
};

export default WeightInput;