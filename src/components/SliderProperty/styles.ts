import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 245px;
    p {
        font-family: ${(props) => props.theme.text.primary.fontFamily};
        font-size: ${(props) => props.theme.text.primary.fontSize};
    }
`;

export const Slider = styled.input`
    -webkit-appearance: none;
    width: 200px;
    height: 12px;
    border-radius: 8px;
    background: ${(props) => props.theme.palette.primary};
    outline: none;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 100%;
        background: ${(props) => props.theme.palette.dark};
        cursor: pointer;
    }
`;
