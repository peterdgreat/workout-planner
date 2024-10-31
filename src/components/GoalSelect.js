import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWeightHanging, faDumbbell, faUserCheck } from '@fortawesome/free-solid-svg-icons';

const GoalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
`;

const GoalButton = styled.button`
    padding: 20px;
    border: none;
    border-radius: 12px;
    background-color: ${props => (props.selected ? '#6200ea' : '#f0f0f0')};
    color: ${props => (props.selected ? 'white' : 'black')};
    cursor: pointer;
    width: 100%;
    max-width: 300px;
    margin: 10px 0;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s;

    &:hover {
        background-color: #6200ea;
        color: white;
    }

    & > svg {
        margin-right: 10px;
    }
`;

const GoalSelect = ({ selectedGoal, onSelect }) => {
    return (
        <GoalContainer>
            <GoalButton selected={selectedGoal === 'lose weight'} onClick={() => onSelect('lose weight')}>
                <FontAwesomeIcon icon={faWeightHanging} />
                Lose Weight
            </GoalButton>
            <GoalButton selected={selectedGoal === 'get fitter'} onClick={() => onSelect('get fitter')}>
                <FontAwesomeIcon icon={faDumbbell} />
                Get Fitter
            </GoalButton>
            <GoalButton selected={selectedGoal === 'gain muscle'} onClick={() => onSelect('gain muscle')}>
                <FontAwesomeIcon icon={faUserCheck} />
                Gain Muscle
            </GoalButton>
        </GoalContainer>
    );
};

export default GoalSelect;
