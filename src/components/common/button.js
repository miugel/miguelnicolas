import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
    background-color: #58caa8;
    border: 1px solid #58caa8;
    border-radius: 3px;
    color: #ffffff;
    cursor: pointer;
    font-family: 'Quicksand', sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    outline: none;
    padding: 12px 24px;
    transition: 0.25s;

    :hover {
        background: none;
        color: #58caa8;
    }
`;

export const Button = ({ text }) => (
    <ButtonContainer>{text}</ButtonContainer>
);