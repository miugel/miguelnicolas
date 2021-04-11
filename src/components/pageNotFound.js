import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './common';

export const PageNotFoundContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 90vh;
    justify-content: center;
`;

export const PageNotFound = () => (
    <PageNotFoundContainer>
        <h1>Page not found</h1>
        <Link to='/'><Button text='Go back' /></Link>
    </PageNotFoundContainer>
);