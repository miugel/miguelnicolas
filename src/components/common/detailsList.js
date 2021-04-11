import React from 'react';
import styled from 'styled-components';

const DetailsListContainer = styled.ul`
    color: #766b93;
    font-weight: 600;
    margin-top: 16px;
    margin-left: 16px;
    
    li {
        margin-bottom: 8px;
    }
`;

export const DetailsList = ({ details }) => (
    <DetailsListContainer>
        {details.map(((detail, index) => <li key={index}>{detail}</li>))}
    </DetailsListContainer>
);