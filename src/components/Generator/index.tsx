import {useState} from "react";
import * as Constants from "../../constants";
import CharacterNbSlider from "../CharacterNbSlider";
import PropertySwitch, {PropertyType} from "../PropertySwitch";
import {IPasswordProperty} from "./PasswordProperty";
import {Card, StyledButton, Text} from "./styles";

const Generator = () => {
    const [properties, setProperties] = useState<IPasswordProperty>({
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
                setProperties={setProperties}
                typeOfProperty={PropertyType.DIGITALS}
            />
            <PropertySwitch
                text={Constants.PROPERTY_SYMBOLS_TEXT}
                property={properties.symbols}
                setProperties={setProperties}
                typeOfProperty={PropertyType.SYMBOLS}
            />
            <PropertySwitch
                text={Constants.PROPERTY_UPPER_CASES_TEXT}
                property={properties.upperCases}
                setProperties={setProperties}
                typeOfProperty={PropertyType.UPPER_CASES}
            />

            <CharacterNbSlider property={properties.characterNb} />
            <StyledButton variant="contained">
                {Constants.BUTTON_GENERATE_TEXT}
            </StyledButton>
        </Card>
    );
};

export default Generator;
