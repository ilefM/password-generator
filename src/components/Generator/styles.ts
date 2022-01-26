import {Button} from "@mui/material";
import styled from "styled-components";
import {styled as styledMUI} from "@mui/material/styles";

export const Card = styled.div`
    position: relative;
    align-content: center;
    background-color: ${(props) => props.theme.bg};
`;

export const Text = styled.p`
    font-family: Inter;
    font-size: 20pt;
`;

export const TextButton = styled.p`
    font-family: Inter;
`;

export const StyledButton = styledMUI(Button)`
    background-color: ${(props) => props.theme.palette.primary.dark};
    font-family: Inter;
    color:${(props) => props.theme.bg.light}; 
    border-radius: 4px;
    :hover{
        background-color: ${(props) =>
            props.theme.palette.primary.main};
    }

`;
