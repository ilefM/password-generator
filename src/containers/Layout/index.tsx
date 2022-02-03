import React, {useState} from "react";
import {
    Card,
    CheckboxContainer,
    Container,
    Title,
    Password,
    PasswordContainer,
    Checkbox,
    Icon,
} from "./styles";
import * as Constants from "../../constants";
import {ICheckboxProperties, IPasswordProperties} from "../../interfaces";
import CheckboxProperties from "../../components/CheckboxProperties";
import SliderProperty from "../../components/SliderProperty";
import GenerateButton from "../../components/GenerateButton";
import {ReactComponent as CopyIcon} from "../../assets/icons/copyIcon.svg";

const Layout = () => {
    const [properties, setProperties] = useState<IPasswordProperties>({
        digitals: true,
        upperCase: true,
        lowerCase: true,
        symbols: true,
        nbCharacter: Constants.INITIAL_NUMBER_CHARACTERS,
    });
    const [password, setPassword] = useState<string>(
        "Click the button to generate"
    );

    const checkboxesProperties: ICheckboxProperties[] = [
        {inputName: "upperCase", text: "Allow uppercases"},
        {inputName: "lowerCase", text: "Allow lowercases"},
        {inputName: "digitals", text: "Allow digitals"},
        {inputName: "symbols", text: "Allow symbols"},
    ];

    return (
        <Container>
            <Card>
                <Title>Password Generator</Title>
                <PasswordContainer>
                    <Password>{password}</Password>
                </PasswordContainer>

                <CheckboxContainer>
                    {checkboxesProperties.map((property, key) => {
                        return (
                            <Checkbox>
                                <CheckboxProperties
                                    key={key}
                                    text={property.text}
                                    propertyType={property.inputName}
                                    properties={properties}
                                    setProperties={setProperties}
                                />
                            </Checkbox>
                        );
                    })}
                </CheckboxContainer>

                <SliderProperty
                    text="Character number :"
                    propertyType="nbCharacter"
                    properties={properties}
                    setProperties={setProperties}
                />
                <GenerateButton
                    properties={properties}
                    setPassword={setPassword}
                />
            </Card>
        </Container>
    );
};

export default Layout;
