import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    bottom: 0;
    height: 3.2rem;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.palette.cardBackground};
`;

export const IconWrapper = styled.div`
    fill: ${(props) => props.theme.text.primary.fontColor};
    svg {
        width: 25px;
        height: 25px;
    }

    margin-top: 5px;
    margin-right: 7px;
`;

export const GithubRepo = styled.div`
    a {
        color: ${(props) => props.theme.text.primary.fontColor};
        font-family: ${(props) => props.theme.text.primary.fontFamily};
        text-decoration: none;
        font-size: ${(props) => props.theme.text.primary.fontSize};
    }
`;
