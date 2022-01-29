import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    body {
        background-color: ${(props) => props.theme.background};
        font-family: ${(props) => props.theme.text.fontFamily};
        margin: 0;
    }
`;

export default GlobalStyles;
