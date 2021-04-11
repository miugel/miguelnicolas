import styled from 'styled-components';

export const SkillsContainer = styled.div`
    margin: 0 auto;
    margin-bottom: 64px;
    margin-top: 32px;
    width: 95%;

    h1 {
        margin-bottom: 32px;
        text-align: center;
    }

    h2 {
        margin-bottom: 32px;
        text-align: center;
    }

    .category {
        margin-bottom: 32px;

        .skill {
            align-items: center;
            display: flex;
            flex-direction: column;
            margin-bottom: 32px;
            transition: 0.25s;

            img {
                margin-bottom: 8px;
                width: 80px;
            }

            p {
                color: #766b93;
                font-size: 1rem;
                font-weight: 600;
            }

            :hover {
                transform: translateY(-16px);
            }
        }
    }

    @media (min-width: 1024px) {
        width: 729.6px;

        .category {
            display: flex;
            justify-content: center;

            .skill {
                margin-bottom: 0;
                margin-left: 32px;
                margin-right: 32px;
            }
        }
    }
`;