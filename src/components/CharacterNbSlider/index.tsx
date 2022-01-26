import {Box, Container, Slider} from "@mui/material";
import React, {FC, useState} from "react";
import {
    INITIAL_NUMBER_CHARACTERS,
    MAX_NUMBER_CHARACTERS,
    MIN_NUMBER_CHARACTERS,
    STEP_NUMBER_CHARACTERS,
} from "../../constants";
import {CharacterNb, SliderContainer} from "./styles";

const CharacterNbSlider: FC<{property: number}> = ({property}) => {
    const [value, setValue] = useState<number | number[]>(
        INITIAL_NUMBER_CHARACTERS
    );

    const handleInputChange = (
        e: Event,
        newValue: number | number[]
    ): void => {
        setValue(newValue);
    };

    return (
        <Container>
            <Box sx={{width: 300}}>
                <SliderContainer
                    aria-label="characterNb"
                    defaultValue={value}
                    value={value}
                    min={MIN_NUMBER_CHARACTERS}
                    max={MAX_NUMBER_CHARACTERS}
                    step={STEP_NUMBER_CHARACTERS}
                    onChange={handleInputChange}
                />
            </Box>
            <CharacterNb>{value}</CharacterNb>
        </Container>
    );
};

export default CharacterNbSlider;
