import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from './common';
import { PageNotFoundContainer } from './styles';

export const PageNotFound = () => (
    <Page>
        <PageNotFoundContainer>
            <h1>Page not found</h1>
            <Link to='/'><button>Go back</button></Link>
        </PageNotFoundContainer>
    </Page>
);