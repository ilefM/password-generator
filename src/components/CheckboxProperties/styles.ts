import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 220px;
`;

export const Text = styled.p`
    display: flex;
    font-family: ${(props) => props.theme.text.primary.fontFamily};
    font-size: ${(props) => props.theme.text.primary.fontSize};
    color: ${(props) => props.theme.text.primary.fontColor};
`;

export const CheckboxContainer = styled.div`
    display: flex;
    margin-top: 7px;
`;

export const Checkbox = styled.input`
    position: relative;
    width: 50px;
    height: 20px;
    -webkit-appearance: none;
    background: ${(props) => props.theme.palette.switchesBackground};
    outline: none;
    border-radius: 20px;
    margin-right: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    &:checked {
        background: ${(props) => props.theme.palette.primary};
        transition: 0.7s;
    }
    &::before {
        content: "";
        position: absolute;
        width: 25px;
        height: 25px;
        border-radius: 20px;
        top: -2px;
        left: 0;
        background: ${(props) => props.theme.palette.secondary};
        transform: scale(1.1);
        transition: 0.3s;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
    &:checked::before {
        left: 25px;
    }
`;
