import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    padding: 10px;
    margin: 10px 0;
    width: 80%;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const InputField = ({ type, name, value, onChange, required }) => {
    return (
        <Input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
        />
    );
};

export default InputField;
