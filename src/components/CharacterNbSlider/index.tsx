import {Box, Container} from "@mui/material";
import React, {Dispatch, FC, SetStateAction, useState} from "react";
import {
    INITIAL_NUMBER_CHARACTERS,
    MAX_NUMBER_CHARACTERS,
    MIN_NUMBER_CHARACTERS,
    STEP_NUMBER_CHARACTERS,
} from "../../constants";
import {IPasswordProperties} from "../../containers/Generator";
import {CharacterNb, SliderContainer} from "./styles";

interface IProps {
    properties: IPasswordProperties;
    setProperties: Dispatch<SetStateAction<IPasswordProperties>>;
}

const CharacterNbSlider: FC<IProps> = ({properties}) => {
    const [value, setValue] = useState<number>(
        properties.characterNb
    );

    const handleInputChange = (
        event: Event,
        newValue: number | number[]
    ): void => {};

    return (
        <Container>
            <Box sx={{width: 300}}>
                <SliderContainer
                    aria-label="characterNb"
                    defaultValue={properties.characterNb}
                    value={properties.characterNb}
                    min={MIN_NUMBER_CHARACTERS}
                    max={MAX_NUMBER_CHARACTERS}
                    step={STEP_NUMBER_CHARACTERS}
                    onChange={handleInputChange}
                />
            </Box>
            <CharacterNb>{properties.characterNb}</CharacterNb>
        </Container>
    );
};

export default CharacterNbSlider;
