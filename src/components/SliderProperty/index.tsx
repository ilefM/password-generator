import React, {ChangeEvent, FC} from "react";
import * as Constants from "../../constants";
import {IPropertiesProps} from "../../interfaces";

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
        <div>
            <input
                type="range"
                name="nbCharacters"
                min={Constants.MIN_NUMBER_CHARACTERS}
                max={Constants.MAX_NUMBER_CHARACTERS}
                onChange={handleChange}
                value={properties.nbCharacter}
            />
        </div>
    );
};

export default SliderProperty;
