import styled from 'styled-components';

const SkillsContainer = styled.div`
    width: 95%;
    margin: 0 auto;
    margin-top: 64px;
    margin-bottom: 64px;

    .back {
        margin-bottom: 16px;
        background: none;
        border: none;
        display: flex;
        align-items: center;
        font-family: 'Quicksand', sans-serif;
        font-size: 1rem;
        font-weight: 600;
        color: #38416f;
        cursor: pointer;

        i {
            margin: 0 4px;
            font-size: 0.875rem;
            transition: 0.5s;
        }

        :hover {
            i {
                margin-right: 8px;
                margin-left: 0;
            }
        }
    }

    h1 {
        margin-bottom: 32px;
        font-size: 2rem;
        font-weight: 700;
        color: #38416f;
        text-align: center;
    }

    
`;

export default SkillsContainer;