import {Switch} from "@mui/material";
import React, {ChangeEvent, FC, useState} from "react";
import {Container, Text} from "./styles";

interface IProperties {
    text: string;
    property: boolean;
}

const PropertySwitch: FC<IProperties> = ({text, property}) => {
    const [checked, setChecked] = useState(false);

    const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
    };

    return (
        <Container>
            <Text>{text}</Text>
            <Switch defaultChecked={checked} onChange={handleClick} />
            <Text>{checked ? "true" : "false"}</Text>
        </Container>
    );
};

export default PropertySwitch;
