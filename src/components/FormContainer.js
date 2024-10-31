import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        @media (max-width: 600px) {
        padding: 10px; /* Smaller padding for mobile */
    }
`;

const FormContainer = ({ children }) => {
    return <Container>{children}</Container>;
};

export default FormContainer;
