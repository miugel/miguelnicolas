import { createGlobalStyle } from 'styled-components';
 
export const GlobalContainer = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background: #e6edfc;
        font-family: 'Quicksand', sans-serif;
    }
    
    h1 {
        color: #38416f;
        margin-bottom: 16px;
    }

    h2 {
        color: #38416f;
    }

    p {
		color: #766b93;
		font-weight: 600;
    }

    a {
        text-decoration: none;
    }
`;