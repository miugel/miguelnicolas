import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const BreadcrumbsContainer = styled.button`
    align-items: center;
    background: none;
    border: none;
    color: #38416f;
    cursor: pointer;
    display: flex;
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 16px;
    outline: none;

    i {
        font-size: 0.75rem;
        margin: 0 4px;
        transition: 0.25s;
    }

    :hover {
        i {
            margin-left: 0;
            margin-right: 8px;
        }
    }
`;

export const Breadcrumbs = () => {
    const history = useHistory();
  
    return (
        <BreadcrumbsContainer onClick={() => history.push('/')}>
            <i className='fas fa-chevron-left' />
            back
        </BreadcrumbsContainer>
    );
};