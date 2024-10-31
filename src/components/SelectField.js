import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
    padding: 10px;
    margin: 10px 0;
    width: 80%;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const SelectField = ({ name, value, onChange, options, required }) => {
    return (
        <Select name={name} value={value} onChange={onChange} required={required}>
            <option value="">Select</option>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </Select>
    );
};

export default SelectField;
