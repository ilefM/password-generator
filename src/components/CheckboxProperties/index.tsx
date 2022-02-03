import React, {ChangeEvent, FC} from "react";
import {IPropertiesProps} from "../../interfaces";
import {Checkbox, CheckboxContainer, Container, Text} from "./styles";

const CheckboxProperties: FC<IPropertiesProps> = ({
    text,
    propertyType,
    properties,
    setProperties,
}) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProperties({
            ...properties,
            [e.target.name]: e.target.checked,
        });
    };

    const isChecked = () => {
        let checked = false;
        switch (propertyType) {
            case "upperCase":
                checked = properties.upperCase;
                break;
            case "lowerCase":
                checked = properties.lowerCase;
                break;
            case "symbols":
                checked = properties.symbols;
                break;
            case "digitals":
                checked = properties.digitals;
                break;
        }
        return checked;
    };

    return (
        <Container>
            <Text>{text}</Text>
            <CheckboxContainer>
                <Checkbox
                    type="checkbox"
                    name={propertyType}
                    onChange={handleChange}
                    checked={isChecked()}
                />
            </CheckboxContainer>
        </Container>
    );
};

export default CheckboxProperties;
