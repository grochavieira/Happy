import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0; 
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        color: ${props => props.theme.colors.gradientText};
        background-color: ${props => props.theme.colors.background};
    }

    body, input, button, textarea {
        font: 600 1.8rem Nunito, sans-serif;
    }
`;