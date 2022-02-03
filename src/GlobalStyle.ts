import {createGlobalStyle} from "styled-components";
import Background from "./assets/images/background.svg";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    body {
        height: 100vh;
        text-align: center;
        //background-color: ${(props) => props.theme.palette.background};
        background-image: url(${Background});
        position: fixed;
        min-height: 100%;
        min-width: 100%;
        background-size: cover;
    }
`;

export default GlobalStyles;
