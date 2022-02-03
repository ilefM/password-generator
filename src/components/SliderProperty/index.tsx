import React, {ChangeEvent, FC} from "react";
import * as Constants from "../../constants";
import {IPropertiesProps} from "../../interfaces";
import {Container, Slider, TextContainer} from "./styles";

const SliderProperty: FC<IPropertiesProps> = ({
    text,
    propertyType,
    properties,
    setProperties,
}) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProperties({
            ...properties,
            nbCharacter: parseInt(e.target.value),
        });
    };
    return (
        <Container>
            <TextContainer>
                <p>{text}</p>
                <p>{properties.nbCharacter}</p>
            </TextContainer>

            <Slider
                type="range"
                name="nbCharacters"
                min={Constants.MIN_NUMBER_CHARACTERS}
                max={Constants.MAX_NUMBER_CHARACTERS}
                onChange={handleChange}
                value={properties.nbCharacter}
            />
        </Container>
    );
};

export default SliderProperty;
