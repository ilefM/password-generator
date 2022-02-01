import React, {ChangeEvent, FC} from "react";
import {IPropertiesProps} from "../../interfaces";
import {Container} from "./styles";

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
            <h5>{text}</h5>
            <input
                type="checkbox"
                name={propertyType}
                onChange={handleChange}
                checked={isChecked()}
            />
        </Container>
    );
};

export default CheckboxProperties;
