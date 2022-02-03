import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const Button = styled.button`
    display: inline-block;
    color: ${(props) => props.theme.palette.primary};
    background-color: ${(props) => props.theme.palette.background};
    font-size: 1em;
    font-size: ${(props) => props.theme.text.primary};
    margin-top: 2em;
    padding: 0.25em 1em;
    border: 2px solid ${(props) => props.theme.palette.dark};
    border-radius: 30px;
    display: block;
    cursor: pointer;
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.26);
    font-weight: 700;
    &:active {
        transform: scale(0.99);
    }
`;
