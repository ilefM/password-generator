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
    width: 200px;
    p {
        font-family: ${(props) => props.theme.text.primary.fontFamily};
        font-size: ${(props) => props.theme.text.primary.fontSize};
        color: ${(props) => props.theme.text.primary.fontColor};
    }
`;

export const Slider = styled.input`
    -webkit-appearance: none;
    width: 200px;
    height: 6px;
    border-radius: 8px;
    background: ${(props) => props.theme.palette.sliderBackground};
    outline: none;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        background: ${(props) => props.theme.palette.light};
        cursor: pointer;
    }
`;
