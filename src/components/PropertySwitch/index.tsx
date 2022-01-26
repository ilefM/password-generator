import {Switch} from "@mui/material";
import React, {
    ChangeEvent,
    Dispatch,
    FC,
    SetStateAction,
    useState,
} from "react";
import {IPasswordProperty} from "../Generator/PasswordProperty";
import {Container, Text} from "./styles";

export enum PropertyType {
    SYMBOLS,
    UPPER_CASES,
    DIGITALS,
}
interface IProperty {
    text: string;
    property: boolean;
    typeOfProperty: PropertyType;
    setProperties: Dispatch<SetStateAction<IPasswordProperty>>;
}

const PropertySwitch: FC<IProperty> = ({text, property}) => {
    const [checked, setChecked] = useState(property);

    const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
    };

    return (
        <Container>
            <Text>{text}</Text>
            <Switch
                defaultChecked={checked}
                onChange={handleClick}
                color="secondary"
            />
        </Container>
    );
};

export default PropertySwitch;
