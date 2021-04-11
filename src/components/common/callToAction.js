import React from 'react';
import styled from 'styled-components';

const CallToActionContainer = styled.div`
    display: flex;
    justify-content: center;

    a {
        align-items: center;
        color: #38416f;
        display: flex;
        font-weight: 600;

        i {
            font-size: 0.75rem;
            margin: 0 4px;
            transition: 0.25s;
        }

        :hover {
            i {
                margin-left: 8px;
                margin-right: 0;
            }
        }
    }
`;

export const CallToAction = ({ link, text }) => (
    <CallToActionContainer>
        <a href={link} target='_blank' rel='noopener noreferrer'>
            {text}
            <i className='fas fa-chevron-right' />
        </a>
    </CallToActionContainer>
);