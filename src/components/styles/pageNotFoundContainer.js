import styled from 'styled-components';

const PageNotFoundContainer = styled.div`
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        margin-bottom: 16px;
        font-size: 2rem;
        font-weight: 700;
        color: #38416f;;
    }

    button {
        padding: 10px 24px;
        background-color: #58caa8;
        border: 1px solid #58caa8;
        border-radius: 3px;
        font-family: 'Quicksand', sans-serif;
        font-size: 0.875rem;
        font-weight: 600;
        color: #ffffff;
        cursor: pointer;
        transition: 0.5s;

        :hover {
            background: none;
            color: #58caa8;
        }
    }
`;

export default PageNotFoundContainer;