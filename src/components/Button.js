import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 10px 20px;
    background-color: #6200ea;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #3700b3;
    }
`;

const Button = ({ onClick, children }) => {
    return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
