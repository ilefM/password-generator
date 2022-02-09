import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const Button = styled.button`
    display: inline-block;
    color: ${(props) => props.theme.palette.background};
    background-color: ${(props) => props.theme.palette.light};
    font-size: ${(props) => props.theme.text.primary.fontSize};
    font-family: ${(props) => props.theme.text.primary.fontFamily};
    font-weight: 400;
    margin-top: 2em;
    padding: 0.25em 1em;
    border: 2px solid ${(props) => props.theme.palette.cardBackground};
    border-radius: 30px;
    display: block;
    cursor: pointer;
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.26);
    &:active {
        transform: scale(0.99);
    }
`;
