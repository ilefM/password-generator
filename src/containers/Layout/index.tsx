import React, {useState} from "react";
import {Card, Container, Title} from "./styles";
import * as Constants from "../../constants";
import {
    ICheckboxProperties,
    IPasswordProperties,
} from "../../interfaces";
import CheckboxProperties from "../../components/CheckboxProperties";
import SliderProperty from "../../components/SliderProperty";
import GenerateButton from "../../components/GenerateButton";

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
    const [password, setPassword] = useState<string>(
        "default password"
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
                <Title>{password}</Title>
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
                <SliderProperty
                    text="Character number"
                    propertyType="nbCharacter"
                    properties={properties}
                    setProperties={setProperties}
                />
                {properties.nbCharacter}
                <GenerateButton
                    properties={properties}
                    setPassword={setPassword}
                />
            </Card>
        </Container>
    );
};

export default Layout;
