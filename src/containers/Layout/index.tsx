import React, {useState} from "react";
import {Card, Container, Title} from "./styles";
import * as Constants from "../../constants";
import {
    ICheckboxProperties,
    IPasswordProperties,
} from "../../interfaces";
import CheckboxProperties from "../../components/CheckboxProperties";

const Layout = () => {
    const [properties, setProperties] = useState<IPasswordProperties>(
        {
            digitals: true,
            upperCase: true,
            lowerCase: true,
            symbols: true,
            nbCharacter: Constants.INITIAL_NUMBER_CHARACTERS,
        }
    );

    const checkboxesProperties: ICheckboxProperties[] = [
        {inputName: "upperCase", text: "Allow uppercases :"},
        {inputName: "lowerCase", text: "Allow lowercases :"},
        {inputName: "digitals", text: "Allow digitals :"},
        {inputName: "symbols", text: "Allow symbols"},
    ];

    return (
        <Container>
            <Card>
                <Title>Password Generator</Title>
                {checkboxesProperties.map((property, key) => {
                    return (
                        <CheckboxProperties
                            key={key}
                            text={property.text}
                            propertyType={property.inputName}
                            properties={properties}
                            setProperties={setProperties}
                        />
                    );
                })}
            </Card>
        </Container>
    );
};

export default Layout;
