import {
    ChangeEvent,
    Dispatch,
    FC,
    SetStateAction,
    useState,
} from "react";
import {Container, Text} from "./styles";
import * as Constants from "../../constants";
import {IPasswordProperties} from "../../containers/Generator";
import {StyledButton} from "../../containers/Generator/styles";

interface IProperties {
    properties: IPasswordProperties;
    setProperties: Dispatch<SetStateAction<IPasswordProperties>>;
}

interface ISwitches {
    upperCases: boolean;
    symbols: boolean;
    digitals: boolean;
}

const PropertySwitches: FC<IProperties> = ({
    properties,
    setProperties,
}) => {
    const [switches, setSwitches] = useState<ISwitches>({
        upperCases: true,
        symbols: true,
        digitals: true,
    });
    const [nb, setNb] = useState<number>(
        Constants.INITIAL_NUMBER_CHARACTERS
    );

    const onChangeInputs = (
        e: ChangeEvent<HTMLInputElement>
    ): void => {
        setSwitches({
            ...switches,
            [e.target.name]: e.target.checked,
        });
    };

    const onChangeNb = (e: ChangeEvent<HTMLInputElement>): void => {
        setNb(parseInt(e.target.value));
    };

    const handleClick = (): void => {
        setProperties({
            ...properties,
            upperCases: switches.upperCases,
            symbols: switches.symbols,
            digitals: switches.digitals,
            characterNb: nb,
        });
    };

    return (
        <Container>
            <Text>{Constants.PROPERTY_UPPER_CASES_TEXT}</Text>
            <input
                type="checkbox"
                name="upperCases"
                checked={switches.upperCases}
                onChange={onChangeInputs}
            />
            <Text>{Constants.PROPERTY_DIGITAL_TEXT}</Text>
            <input
                type="checkbox"
                name="digitals"
                checked={switches.digitals}
                onChange={onChangeInputs}
            />
            <Text>{Constants.PROPERTY_SYMBOLS_TEXT}</Text>
            <input
                type="checkbox"
                name="symbols"
                checked={switches.symbols}
                onChange={onChangeInputs}
            />

            <input
                type="number"
                name="characterNb"
                min="3"
                max="20"
                defaultValue={nb}
                onChange={onChangeNb}
            />
            {nb}
            <StyledButton variant="contained" onClick={handleClick}>
                {Constants.BUTTON_GENERATE_TEXT}
            </StyledButton>
        </Container>
    );
};

export default PropertySwitches;
