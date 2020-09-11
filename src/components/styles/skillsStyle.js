import styled from 'styled-components';

const SkillsContainer = styled.div`
    width: 95%;
    margin: 0 auto;
    margin-top: 64px;
    margin-bottom: 128px;

    .back {
        margin-bottom: 16px;
        background: none;
        border: none;
        font-family: 'Quicksand', sans-serif;
        font-size: 1rem;
        font-weight: 600;
        color: #38416f;
        cursor: pointer;

        i {
            margin: 0 4px;
            font-size: 0.75rem;
            transition: 0.25s;
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

    h2 {
        margin-bottom: 32px;
        font-size: 1.5rem;
        font-weight: 700;
        color: #38416f;
        text-align: center;
    }

    .group {
        margin-bottom: 32px;

        .item {
            margin-bottom: 32px;
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: 0.25s;

            img {
                width: 80px;
                margin-bottom: 8px;
            }

            p {
                font-size: 1rem;
                font-weight: 600;
                color: #766b93;
            }

            :hover {
                transform: translateY(-8px);
            }
        }
    }

    .call-to-action {
        display: flex;
        justify-content: center;

        a {
            text-decoration: none;
    
            button {
                background: none;
                border: none;
                font-family: 'Quicksand', sans-serif;
                font-size: 1rem;
                font-weight: 600;
                color: #38416f;
                cursor: pointer;
    
                i {
                    margin: 0 4px;
                    font-size: 0.75rem;
                    transition: 0.25s;
                }
    
                :hover {
                    i {
                        margin-left: 8px;
                        margin-right: 0;
                    }
                }
            }
        }
    }

    @media (min-width: 1024px) {
        width: 972.8px;

        .group {
            display: flex;
            justify-content: center;

            .item {
                margin-right: 32px;
                margin-bottom: 0;
                margin-left: 32px;
            }
        }
    }
`;

export default SkillsContainer;
