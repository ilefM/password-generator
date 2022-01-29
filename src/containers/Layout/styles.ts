import styled from "styled-components";

export const Container = styled.div``;

export const Card = styled.div`
    background-color: ${(props) => props.theme.lightBackground};
    margin: 10%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    display: flex;
    justify-content: center;
`;

export const Title = styled.p`
    font-size: ${(props) => props.theme.text.fontSize};
    color: ${(props) => props.theme.text.fontColor};
    font-size: 2em;
`;
