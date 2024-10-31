import React from 'react';
import styled from 'styled-components';

const GenderContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
`;

const GenderButton = styled.button`
    padding: 15px;
    border: none;
    border-radius: 8px;
    background-color: ${props => (props.selected ? '#6200ea' : '#f0f0f0')};
    color: ${props => (props.selected ? 'white' : 'black')};
    cursor: pointer;
    flex: 1;
    margin: 0 5px;
    font-size: 16px;

    &:hover {
        background-color: #6200ea;
        color: white;
    }
`;

const GenderSelect = ({ selectedGender, onSelect }) => {
    return (
        <GenderContainer>
            <GenderButton selected={selectedGender === 'male'} onClick={() => onSelect('male')}>
                Male
            </GenderButton>
            <GenderButton selected={selectedGender === 'female'} onClick={() => onSelect('female')}>
                Female
            </GenderButton>
            <GenderButton selected={selectedGender === 'non-binary'} onClick={() => onSelect('non-binary')}>
                Non-Binary
            </GenderButton>
        </GenderContainer>
    );
};

export default GenderSelect;
