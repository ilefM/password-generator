import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    body {
        height: 100vh;
        text-align: center;
        background-color: ${(props) => props.theme.palette.background};
        position: fixed;
        min-height: 100%;
        min-width: 100%;
        background-size: cover;
    }
`;

export default GlobalStyles;
