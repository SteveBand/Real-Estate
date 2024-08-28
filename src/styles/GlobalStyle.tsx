import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    :root{
        --text-color: #1e1e1b;
        --text-light-color:#1e1e1b86; 
        --light-border: #0000003a;
        --font-family: "Poppins", sans-serif;;
    }
    body, html{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: var(--font-family);
    }
`;
