import React, {ChangeEvent, FC} from "react";
import {IPropertiesProps} from "../../interfaces";

const CheckboxProperties: FC<IPropertiesProps> = ({
    text,
    propertyType,
    properties,
    setProperties,
}) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProperties({
            ...properties,
            [e.target.name]: e.target.checked,
        });
    };
    return (
        <div>
            <h5>{text}</h5>
            <input
                type="checkbox"
                name={propertyType}
                onChange={handleChange}
            />
        </div>
    );
};

export default CheckboxProperties;
