import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFoundContainer from './styles/pageNotFoundContainer';

const PageNotFound = () => {
    return (
        <PageNotFoundContainer>
            <h1>Page not found</h1>
            <Link to='/'><button>Go back</button></Link>
        </PageNotFoundContainer>
    );
};

export default PageNotFound;