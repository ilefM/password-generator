import styled from "styled-components";

export const CardContainer = styled.div`
    background-color: ${(props) => props.theme.palette.cardBackground};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 35px;
    overflow: hidden;
    padding: 0 0 45px;
    margin: 80px auto 0;
    width: 600px;
    @media (max-width: ${(props) => props.theme.mobile}) {
        width: 350px;
        margin-top: 10px;
    }
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
`;

export const Title = styled.p`
    font-family: ${(props) => props.theme.text.primary.fontFamily};
    color: ${(props) => props.theme.text.primary.fontColor};
    font-size: 30px;
    text-align: center;
`;

export const PasswordContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 280px;
    height: 50px;
    align-items: center;
    border: 2px solid ${(props) => props.theme.palette.primary};
`;

export const Password = styled.p`
    text-align: center;
    margin-left: 7px;
    font-size: 20px;
    height: 20px;
    color: ${(props) => props.theme.text.primary.fontColor};
`;

export const CheckboxContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: ${(props) => props.theme.mobile}) {
        flex-direction: column;
    } ;
`;

export const Checkbox = styled.div`
    width: 115px;
    flex: 0 50%;
    @media (max-width: ${(props) => props.theme.mobile}) {
        width: 100%;
    }
`;
