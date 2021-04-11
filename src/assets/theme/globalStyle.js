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
`;