import React, {Dispatch, FC} from "react";
import {IPasswordProperties} from "../../interfaces";
import {generatePassword} from "../../passwordGenerator";

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
        <div>
            <button onClick={handleClick}>Generate password</button>
        </div>
    );
};

export default GenerateButton;
