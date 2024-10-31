import React from 'react';
import styled from 'styled-components';

const StepContainer = styled.div`
    display: ${props => (props.active ? 'block' : 'none')};
    width: 100%;
    text-align: center;
`;

const StepIndicatorCircle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${props => (props.active ? '#6200ea' : '#e0e0e0')};
    margin: 0 5px;
    display: inline-block;
`;

const Step = ({ active, children }) => {
    return (
        <StepContainer active={active}>
            {children}
        </StepContainer>
    );
};

export { Step, StepIndicatorCircle };
