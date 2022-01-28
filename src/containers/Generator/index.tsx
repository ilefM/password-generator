import {useState} from "react";
import * as Constants from "../../constants";
import PropertySwitch from "../../components/PasswordProperties";
import {Card, StyledButton, Text} from "./styles";
import CharacterNbSlider from "../../components/CharacterNbSlider";

export interface IPasswordProperties {
    characterNb: number;
    upperCases: boolean;
    symbols: boolean;
    digitals: boolean;
}

const Generator = () => {
    const [properties, setProperties] = useState<IPasswordProperties>(
        {
            characterNb: Constants.INITIAL_NUMBER_CHARACTERS,
            upperCases: true,
            symbols: true,
            digitals: true,
        }
    );

    return (
        <Card>
            <Text>{Constants.TITLE}</Text>

            <Text>sdsdsdsds</Text>

            <PropertySwitch
                properties={properties}
                setProperties={setProperties}
            />

            {properties.digitals ? "true" : "false"}
            {properties.symbols ? "true" : "false"}
            {properties.upperCases ? "true" : "false"}
        </Card>
    );
};

export default Generator;
