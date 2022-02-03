import React, {Dispatch, FC} from "react";
import {IPasswordProperties} from "../../interfaces";
import {generatePassword} from "./passwordGenerator";
import {Container, Button} from "./styles";

interface IProps {
    properties: IPasswordProperties;
    setPassword: Dispatch<React.SetStateAction<string>>;
}

const GenerateButton: FC<IProps> = ({properties, setPassword}) => {
    const handleClick = () => {
        const newPassword = generatePassword(
            properties.lowerCase,
            properties.upperCase,
            properties.symbols,
            properties.digitals,
            properties.nbCharacter
        );
        setPassword(newPassword);
    };

    return (
        <Container>
            <Button onClick={handleClick}>Generate password</Button>
        </Container>
    );
};

export default GenerateButton;
