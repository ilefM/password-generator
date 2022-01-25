import React from "react";
import * as Constants from "../../constants";
import PropertySwitch from "../PropertySwitch";
import {Text} from "./styles";

const Generator = () => {
    return (
        <div>
            <Text>At least, we know</Text>
            <PropertySwitch
                text={Constants.propertyDigitalText}
                property={false}
            />
            <PropertySwitch
                text={Constants.propertySymbolsText}
                property={false}
            />
            <PropertySwitch
                text={Constants.propertyUpperCaseText}
                property={false}
            />
        </div>
    );
};

export default Generator;
