import {constants} from "buffer";
import {useState} from "react";
import * as Constants from "../../constants";
import CharacterNbSlider from "../CharacterNbSlider";
import PropertySwitch from "../PropertySwitch";
import {Card, StyledButton, Text} from "./styles";

interface IState {
    properties: {
        characterNb: number;
        upperCases: boolean;
        symbols: boolean;
        digitals: boolean;
    };
}

const Generator = () => {
    const [properties, setProperties] = useState<
        IState["properties"]
    >({
        characterNb: Constants.INITIAL_NUMBER_CHARACTERS,
        upperCases: true,
        symbols: true,
        digitals: true,
    });

    return (
        <Card>
            <Text>{Constants.TITLE}</Text>

            <Text>sdsdsdsds</Text>

            <PropertySwitch
                text={Constants.PROPERTY_DIGITAL_TEXT}
                property={properties.digitals}
            />
            <PropertySwitch
                text={Constants.PROPERTY_SYMBOLS_TEXT}
                property={properties.symbols}
            />
            <PropertySwitch
                text={Constants.PROPERTY_UPPER_CASES_TEXT}
                property={properties.upperCases}
            />

            <CharacterNbSlider property={properties.characterNb} />
            <StyledButton variant="contained">
                {Constants.BUTTON_GENERATE_TEXT}
            </StyledButton>
        </Card>
    );
};

export default Generator;
